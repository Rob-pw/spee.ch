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

export const view = (model, actions) => html`
  <div>
    <div class='demo-card-wide mdl-card mdl-shadow--2dp'>
      <div class='mdl-card__title'>
        <h2 class='mdl-card__title-text'>${model.message}</h2>
      </div>
      <div class='mdl-card__supporting-text'>
        ${model.message.indexOf('desu,') !== -1
          ? new Array(25).join(`${model.message} `)
          : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...`
        }
      </div>
      <div class='mdl-card__actions mdl-card--border'>
        <a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
          onClick=${actions.love}>
          Get Started
        </a>
      </div>
      <div class='mdl-card__menu'>
        <button class='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
          <i class='material-icons'>:3</i>
        </button>
      </div>
    </div>
  </div>
`;
