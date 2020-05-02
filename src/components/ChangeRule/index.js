import React, { useState, useCallback, useEffect } from 'react';
import propTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiToggleLeft } from 'react-icons/fi';
import { uuid } from 'uuidv4';

import api from '~/services/api';

import CardLayout from '~/pages/_layouts/CardLayout';

import { changeRuleRequest } from '~/store/modules/rule/actions';

import { Container, RulesListButtons, ToggleButton } from './styles';

export default function ChangeRule({ loading }) {
  const { id } = useParams('id');
  const [groupRules, setGroupRules] = useState([]);

  const dispatch = useDispatch();
  const loadingRule = useSelector(state => state.rule.loading);

  const handleChange = useCallback(
    (ruleId, ruleStats, ruleType) => {
      const stats = !ruleStats ? 'on' : 'off';
      dispatch(changeRuleRequest(ruleId, stats, id));

      setGroupRules(
        groupRules.map(gr =>
          gr.type === ruleType ? { ...gr, active: !gr.active } : gr
        )
      );
    },
    [dispatch, id, groupRules]
  );

  const loadGroupRules = useCallback(async groupTgId => {
    const response = await api.get(`grouprules/${groupTgId}`);
    const rules = [
      'DENY_SPAM', // 1
      'DENY_FLOOD', // 2
      'DENY_BOT', // 3
      'DENY_BOT_FORWARD', // 4
      'DENY_CHAT_FORWARD', // 5
      'DENY_LINK', // 6
    ];

    const rulesPt = [
      'Anti-Spam',
      'Anti-Flood',
      'Anti-Bot Mensageiro',
      'Anti-Bot Encaminhamentos',
      'Anti-Chats Encaminhamentos',
      'Anti-Link',
    ];

    const data = rules.map(r => {
      const isRule = response.data.rules.find(resRule => resRule.type === r);
      const ruleId = rules.indexOf(r) + 1;
      const ptRule = rulesPt[ruleId - 1];
      const uuId = uuid();
      if (isRule !== false && isRule !== undefined) {
        return {
          ...isRule,
          active: true,
          ruleId,
          ptRule,
          uuId,
        };
      }
      return {
        type: r,
        active: false,
        ruleId,
        ptRule,
        uuId,
      };
    });

    setGroupRules(data);
  }, []);

  useEffect(() => {
    loadGroupRules(id);
  }, [id, loadGroupRules]);

  return (
    <Container>
      <CardLayout loading={loading.toString()}>
        <h1>
          Regras de Grupo <small>Configurações</small>
        </h1>

        <RulesListButtons>
          {groupRules.map(singleRule => (
            <li key={singleRule.uuId}>
              <ToggleButton
                type="button"
                onClick={() =>
                  handleChange(
                    singleRule.ruleId,
                    singleRule.active,
                    singleRule.type
                  )
                }
                loadingRule={loadingRule}
                active={singleRule.active}
              >
                {singleRule.ptRule}
                <FiToggleLeft active={singleRule.active} />
              </ToggleButton>
            </li>
          ))}
        </RulesListButtons>
      </CardLayout>
    </Container>
  );
}

ChangeRule.propTypes = {
  loading: propTypes.bool.isRequired,
};
