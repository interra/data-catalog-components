import React from "react";
import PropTypes from "prop-types";

class FontAwesomeIcon extends React.PureComponent {
  render() {
    const { icon, height, width, fill } = this.props;

    switch (icon) {
      case 'density-1':
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            viewBox="0 0 160 160"
          >
            <path 
              fill={this.props.fill} 
              d="M141.441 46.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V27.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 128.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014v-19.496c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 87.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V68.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496z"
            />
          </svg>
        )

      case 'density-2':
        return (
          <svg
            width={this.props.width} 
            height={this.props.height} 
            viewBox="0 0 160 160"
          >
            <path 
              fill={this.props.fill} 
              d="M141.551 36.002c0 1.757-1.35 3.182-3.014 3.182H17.682c-1.664 0-3.014-1.425-3.014-3.182V24.92c0-1.758 1.35-3.182 3.014-3.182h120.855c1.664 0 3.014 1.424 3.014 3.182v11.082zm0 20.943c0-1.758-1.35-3.182-3.014-3.182H17.682c-1.664 0-3.014 1.424-3.014 3.182v11.081c0 1.759 1.35 3.184 3.014 3.184h120.855c1.664 0 3.014-1.425 3.014-3.184V56.945zm0 32.026c0-1.758-1.35-3.183-3.014-3.183H17.682c-1.664 0-3.014 1.425-3.014 3.183v11.081c0 1.758 1.35 3.182 3.014 3.182h120.855c1.664 0 3.014-1.424 3.014-3.182V88.971zm0 32.025c0-1.758-1.35-3.182-3.014-3.182H17.682c-1.664 0-3.014 1.424-3.014 3.182v11.082c0 1.757 1.35 3.182 3.014 3.182h120.855c1.664 0 3.014-1.425 3.014-3.182v-11.082z"
            />
          </svg>
        )

      case 'density-3':
        return (
          <svg
            width={this.props.width} 
            height={this.props.height} 
            viewBox="0 0 160 160"
          >
            <path 
              fill={this.props.fill} 
              d="M141.624 51.054a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM142.015 30.76a3.015 3.015 0 0 1-3.014 3.014H18.146a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014h120.855a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 91.642a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 71.348a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 111.936a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 132.229a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496z"
            />
          </svg>
        )

      case "info-circle":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-info-circle fa-w-16 fa-2x"
          >
            <path
              fill={fill}
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            />
          </svg>
        );

      case "twitter":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-twitter fa-w-16 fa-2x"
          >
            <path
              fill={fill}
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        );

      case "facebook":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-facebook fa-w-14 fa-2x"
          >
            <path
              fill={fill}
              d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
            />
          </svg>
        );

      case "reddit":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="reddit-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-reddit-square fa-w-14 fa-2x"
          >
            <path
              fill={fill}
              d="M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8-14.9 0-26.8 11.9-26.8 26.8 0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5 0-14.9-11.9-26.8-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8 0-14.6-11.9-26.8-26.8-26.8-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z"
            />
          </svg>
        );

      case "google-plus":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-plus-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-google-plus-square fa-w-14 fa-2x"
          >
            <path
              fill={fill}
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"
            />
          </svg>
        );

      case "times":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            className="svg-inline--fa fa-times fa-w-11 fa-2x"
          >
            <path
              fill={fill}
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
          </svg>
        );

      case "download":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="download"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-download fa-w-16 fa-2x"
          >
            <path
              fill={fill}
              d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            />
          </svg>
        );

      case "chart-bar":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-bar"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-chart-bar fa-w-16 fa-2x"
          >
            <path
              fill={fill}
              d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
            />
          </svg>
        );

      case "chart-pie":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-pie"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 544 512"
            className="svg-inline--fa fa-chart-pie fa-w-17 fa-2x"
          >
            <path
              fill={fill}
              d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
            />
          </svg>
        );

      case "chevron-right":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="svg-inline--fa fa-chevron-right fa-w-10 fa-2x"
          >
            <path
              fill={fill}
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        );

      case "chevron-down":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-chevron-down fa-w-14 fa-2x"
          >
            <path
              fill={fill}
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            />
          </svg>
        );

      case "chevron-up":
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-chevron-up fa-w-14 fa-2x"
          >
            <path
              fill={fill}
              d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
            />
          </svg>
        );

      default:
        return (
          <svg
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-info-circle fa-w-16 fa-2x"
          >
            <path
              fill={fill}
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            />
          </svg>
        );
    }
  }
}

FontAwesomeIcon.defaultProps = {
  icon: "info-circle",
  fill: "black",
  width: 20,
  height: 20
};

FontAwesomeIcon.propTypes = {
  icon: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default FontAwesomeIcon;
