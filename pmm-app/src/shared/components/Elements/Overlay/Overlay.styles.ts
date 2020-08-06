import { css } from 'emotion';

export const styles = {
  overlayWrapper: css`
    position: relative;
  `,
  spinner: css`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  `,
  overlay: css`
    background: rgba(22, 23, 25, .3);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
  `,
  childrenWrapper: css`
    filter: blur(1px);
  `,
};
