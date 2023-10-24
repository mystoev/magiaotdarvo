import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { useSendEmail } from '../hooks/use-send-email';
import './query-form.less';

const QueryForm = ({ slim, productLink = null }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const navigate = useNavigate();
  const { mutate } = useSendEmail({
    onSuccess: () => {
      navigate('/email-sent');
    }
  });
  return (
    <div className={slim ? 'query-form-slim' : 'query-form'}>
      {!slim && (
        <p>
          Изпрати запитване, като попълниш формата по-долу, след което ще получиш обаждане за
          детайли. Или директно се обади на телефон 0890932001.
        </p>
      )}
      <fieldset>
        <label>Име</label>
        <input
          type="text"
          alt="name-field"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label>Вашият имейл</label>
        <input
          type="text"
          alt="email-field"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label>Телефон за контакт</label>
        <input
          type="text"
          alt="phone-field"
          value={state.phone}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
        />
      </fieldset>

      <fieldset>
        <label>Съобщение</label>
        <textarea
          alt="message-field"
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}></textarea>
      </fieldset>
      <button
        className="button-default"
        onClick={() => mutate({ ...state, productLink })}
        disabled={
          _.isEmpty('state.name') ||
          _.isEmpty(state.email) ||
          _.isEmpty(state.phone) ||
          _.isEmpty(state.message)
        }>
        Изпрати
      </button>
    </div>
  );
};

QueryForm.propTypes = {
  slim: PropTypes.bool,
  productLink: PropTypes.string
};

export default QueryForm;
