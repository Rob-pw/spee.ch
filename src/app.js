import HeaderView from './views/header';

export const state = {
  message: 'Moshi moshi, Spiderman desu!?'
};

export const actions = {
  love({ message }) {
    const desu = message.split('n ')[1].substring(0, 4);

    return {
      message: `${desu}, ${desu}!`
    };
  }
};

export const view = () => html`
  <div class="mdl-layout mdl-js-layout">
    ${HeaderView()}
  </div>
`;
