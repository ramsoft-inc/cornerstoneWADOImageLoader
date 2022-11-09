const local = {
  jpeg: undefined,
  decodeConfig: {},
};

export function initialize(decodeConfig) {
  local.decodeConfig = decodeConfig;

  if (local.jpeg) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    import('../../../codecs/jpegLossless.js').then((jpeg) => {
      local.jpeg = jpeg;
      resolve();
    }, reject);
  });
}

async function decodeJPEGLossless() {
  return console.log('STOP');
}

export default decodeJPEGLossless;
