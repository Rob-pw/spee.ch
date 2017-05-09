import Gallery from './gallery';

export default () => html`
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Spee.ch</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
            Upload New
          </button>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content mdl-grid">
        ${[...Array(3)].map(() => html`
          <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone">
            ${Gallery()}
          </div>
        `)}
      </div>
    </main>
  </div>
`;
