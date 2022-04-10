export const IconRandom = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="White" transform="matrix(1.0178,0,0,1.04405,0.101483,-2.25354)">
        <g transform="matrix(2.27864,0,0,1.96954,-43.6806,-34.5073)">
          <g transform="matrix(0.431185,-0,-0,0.486312,19.1258,18.6164)">
            <path
              d="M78.356,61.249L95.014,72.355L78.356,83.46"
              fill="none"
              stroke={color}
              strokeWidth="6px"
            />
            <path
              d="M4.986,27.719L25.241,27.719C25.241,27.719 50.089,25.43 50.089,46.412C50.089,67.395 47.684,72.355 95.014,72.355"
              fill="none"
              stroke={color}
              strokeWidth="6px"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
            />
          </g>
        </g>
        <g transform="matrix(2.27864,0,0,-1.89584,-43.6806,131.441)">
          <g transform="matrix(0.431185,0,0,-0.505216,19.1258,68.1928)">
            <path
              d="M78.356,17.377L95.014,28.482L78.356,39.587"
              fill="none"
              stroke={color}
              strokeWidth="6px"
            />
            <path
              d="M4.986,71.447L25.241,71.447C25.241,71.447 50.089,73.651 50.089,53.453C50.089,33.256 47.684,28.482 95.014,28.482"
              fill="none"
              stroke={color}
              strokeWidth="6px"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const IconPlay = ({ color, width, height }) => {
  return (
    <svg width={width} height={height} viewBox="-15 -13 120 120" version="1.1">
      <g transform="matrix(9.13051e-17,1.49113,-1.10682,6.77729e-17,107.156,-26.214)">
        <path
          d="M51.112,26.212L76.54,77.068L25.684,77.068L51.112,26.212Z"
          fill="none"
          stroke={color}
          strokeWidth="6px "
        />
      </g>
    </svg>
  );
};

export const IconStop = ({ color, width, height }) => {
  return (
    <svg width={width} height={height} viewBox="-25 -30 150 150" version="1.1">
      <g transform="matrix(1.19305,0,0,1.19305,-7.69496,-11.1396)">
        <path
          d="M82.307,34.273C82.307,24.905 74.701,17.299 65.333,17.299L31.385,17.299C22.017,17.299 14.412,24.905 14.412,34.273L14.412,68.22C14.412,77.588 22.017,85.194 31.385,85.194L65.333,85.194C74.701,85.194 82.307,77.588 82.307,68.22L82.307,34.273Z"
          fill="none"
          stroke={color}
          strokeWidth="6px"
        />
      </g>
    </svg>
  );
};
