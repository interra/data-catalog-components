import React from 'react'

class TopicImage extends React.PureComponent {
  render() {
    switch(this.props.title) {
      case 'Health Care':
      case 'Healthcare':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 100 100">
            <path fill={this.props.fill} d="M78.886 78.233v-7.817c0-6.065-5.017-11.083-11.083-11.083-6.067 0-11.084 5.018-11.084 11.083v17.501c0 3.5-2.917 6.416-6.417 6.416s-6.417-2.916-6.417-6.416v-31.15c6.533-.583 12.951-3.267 17.966-8.283 10.734-10.733 11.201-26.717 1.518-38.85.233-.7.35-1.4.35-2.217 0-3.5-2.916-6.417-6.416-6.417-3.501 0-6.417 2.917-6.417 6.417s2.916 6.417 6.417 6.417c1.05 0 1.983-.233 2.917-.7 7.583 10.15 7.116 23.217-1.634 31.967-9.334 9.333-24.618 9.45-33.834.117-8.75-8.75-9.333-21.934-1.633-32.083.816.467 1.867.7 2.917.7 3.5 0 6.417-2.917 6.417-6.417s-3.15-6.417-6.65-6.417c-3.5 0-6.417 2.917-6.417 6.417 0 .817.117 1.517.35 2.217-9.567 12.017-8.983 28.35 1.517 38.967 5.017 5.017 11.316 7.701 17.967 8.167v31.15C39.219 93.983 44.235 99 50.302 99s11.083-5.017 11.083-11.083V70.416c0-3.499 2.916-6.416 6.417-6.416 3.5 0 6.416 2.917 6.416 6.416v7.817c-4.666 1.05-8.167 5.25-8.167 10.267 0 5.833 4.667 10.5 10.5 10.5 5.834 0 10.5-4.667 10.5-10.5.001-5.017-3.498-9.217-8.165-10.267zM55.553 7.417c0-.933.816-1.75 1.75-1.75.933 0 1.75.817 1.75 1.75 0 .934-.817 1.75-1.75 1.75-.934 0-1.75-.817-1.75-1.75zm-29.751-1.75c.933 0 1.75.817 1.75 1.75 0 .934-.817 1.75-1.75 1.75-.934 0-1.75-.817-1.75-1.75 0-.934.817-1.75 1.75-1.75zm50.75 88.666c-3.266 0-5.833-2.566-5.833-5.833s2.567-5.834 5.833-5.834c3.268 0 5.834 2.567 5.834 5.834s-2.567 5.833-5.834 5.833z"/>
          </svg>
        )

      case 'Education':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 100 100">
            <path fill={this.props.fill} d="M87.593 74.161H70.604c1.427-1.252 2.521-2.49 3.255-3.682 1.752-2.693 8.755-22.527 8.755-30.467 0-11.726-8.512-20.236-20.238-20.236-3.501 0-7.03 1.021-10.233 2.956-.105-1.718-.236-3.832-.705-6.069 1.188.327 2.212.475 3.27.475 1.117 0 2.767-.145 4.276-.833 4.02-1.654 6.772-5.571 7.013-9.993a2.19 2.19 0 0 0-.662-1.577c-2.078-1.925-4.812-2.985-7.7-2.985-1.492 0-2.94.285-4.301.846-2.171.868-4.108 2.541-5.372 4.624-1.158-1.873-2.395-3.41-3.768-4.685-.743-.743-2.122-.673-2.911.117-.77.77-.717 2.076.125 2.917 5.409 4.939 6.378 13.309 6.526 17.14-3.161-1.893-6.804-2.932-10.309-2.932-11.726 0-20.236 8.511-20.236 20.236 0 7.949 7.003 27.777 8.755 30.465.836 1.304 1.853 2.458 3.25 3.684h-8.386c-5.905 0-10.708 4.803-10.708 10.707v2.672c0 5.905 4.804 10.71 10.708 10.71h66.585a2.086 2.086 0 0 0 2.108-2.109V76.385c0-1.268-.906-2.224-2.108-2.224zM37.624 23.993c3.928 0 7.831 1.546 10.979 4.344.124.124.187.172.313.186.025.019.051.036.078.053l.074.111a.57.57 0 0 0 .515.167c.017.013.036.033.066.064l.073.072h.218c.246 0 .524 0 .808-.142.128-.062.224-.126.318-.189a2.05 2.05 0 0 1 .263-.158l.063-.044c2.915-2.803 6.814-4.346 10.982-4.346 9.431 0 16.018 6.587 16.018 16.019 0 7.149-6.693 26.169-8.095 28.22-2.361 3.71-6.453 5.925-10.945 5.925-2.889 0-5.614-.96-8.112-2.863a2.216 2.216 0 0 0-1.3-.39c-.491 0-.891.12-1.319.403-2.336 1.891-5.059 2.85-8.087 2.85-4.309-.11-8.461-2.427-10.834-6.042-1.337-2.112-8.097-20.909-8.097-28.22.002-9.432 6.589-16.02 16.021-16.02zm17.083-10.958c-1.55 0-2.942-.422-4.142-1.256.476-2.446 2.058-4.435 4.348-5.465a7.416 7.416 0 0 1 6.84.807c-.505 2.509-2.121 4.502-4.346 5.35-1.012.38-1.895.564-2.7.564zM85.6 78.262v15.653H21.123a6.497 6.497 0 0 1-6.49-6.489v-2.675a6.497 6.497 0 0 1 6.49-6.489H85.6z"/>
          </svg>
        )

      case 'Economy':
      case 'Finance and Budgeting':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 100 100">
            <path fill={this.props.fill} d="M10.311 92.75H83.777a2.116 2.116 0 0 0 2.111-2.111v-9.5h5.277a2.116 2.116 0 0 0 2.111-2.111V57.916h2.111a2.116 2.116 0 0 0 2.111-2.109V32.583c0-1.162-.95-2.111-2.111-2.111h-2.111V9.361a2.117 2.117 0 0 0-2.111-2.111h-76C8.2 7.25 2.5 12.95 2.5 19.917v65.022a7.792 7.792 0 0 0 7.811 7.811zm71.355-4.223h-71.25c-2.006 0-3.694-1.582-3.694-3.588v-.105c0-2.006 1.688-3.59 3.694-3.59H81.665v7.283zm11.611-34.832H69.105l-8.444-9.501 8.444-9.5h24.172v19.001zm-78.11-42.223h73.889v19h-20.9c-.634 0-1.161.211-1.583.739L56.228 42.822c-.739.844-.739 2.005 0 2.85l10.345 11.611c.422.422.949.74 1.583.74h20.9v19H10.417c-1.267 0-2.639.316-3.694.949V19.917c-.001-4.645 3.799-8.445 8.444-8.445z"/>
            <path fill={this.props.fill} d="M73.223 37.861c-3.484 0-6.334 2.85-6.334 6.333s2.85 6.333 6.334 6.333c3.482 0 6.332-2.85 6.332-6.333s-2.85-6.333-6.332-6.333zm0 8.445c-1.162 0-2.111-.95-2.111-2.111s.949-2.111 2.111-2.111c1.16 0 2.11.95 2.11 2.111s-.95 2.111-2.11 2.111z"/>
          </svg>
        )

      case 'Public Safety':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 100 100">
            <path fill={this.props.fill} d="M49.993 26.67c-6.416 0-11.665 5.25-11.665 11.666 0 6.415 5.25 11.665 11.665 11.665s11.665-5.25 11.665-11.665c-.001-6.416-5.25-11.666-11.665-11.666zm0 18.664c-3.85 0-6.999-3.148-6.999-6.998 0-3.849 3.148-6.999 6.999-6.999 3.848 0 6.999 3.15 6.999 6.999-.001 3.85-3.151 6.998-6.999 6.998z"/>
            <path fill={this.props.fill} d="M98.287 39.036l-4.667-4.667c-1.285-1.399-1.633-4.432-1.633-5.365 0-1.05-.702-1.982-1.752-2.216-.116 0-17.495-4.316-22.86-6.999-9.101-4.549-15.983-9.332-16.1-9.332-.233 0-.584-.117-.816-.117-.117 0-.351.117-.467.117h-.35c-.351-.117-.818.116-.818.232 0 0-7.115 4.667-16.097 9.216-5.366 2.683-22.63 6.765-22.864 6.765-1.05.234-1.749 1.168-1.866 2.218 0 .933-.35 4.082-1.633 5.365l-4.665 4.665c-.934.935-.934 2.334 0 3.268l15.863 15.979c-.116.352-.233.818-.233 1.169v13.997c0 .467.117.934.233 1.398a2.605 2.605 0 0 0 .233 2.45c.467.467 10.382 12.48 32.195 12.48 21.814 0 31.727-12.014 32.194-12.596.583-.702.583-1.634.235-2.451.116-.467.231-.934.231-1.398v-13.88c0-.467-.115-.817-.115-1.169l15.864-15.863a2.363 2.363 0 0 0-.112-3.266zm-20.3 34.295h-55.99V59.334h55.99v13.997zm-52.141 4.667h48.409c-4.433 3.498-12.365 6.998-24.262 6.998-11.899 0-19.831-3.5-24.147-6.998zm53.31-23.215c-.352-.115-.818-.115-1.169-.115h-55.99c-.467 0-.816.115-1.167.115L6.599 40.669l3.032-3.032c1.984-1.984 2.683-4.9 2.917-6.767 4.549-1.166 17.382-4.315 22.163-6.765 7.116-3.617 12.833-7.116 15.282-8.633 2.449 1.517 8.165 5.133 15.283 8.633 4.782 2.449 17.613 5.599 22.161 6.765.235 1.866.934 4.782 2.918 6.767l3.03 3.032-14.229 14.114z"/>
          </svg>
        )

      case 'Transportation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 24 24">
            <path fill={this.props.fill} d="M14.5 2h-5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM14 4h-4V3h4v1zM6.5 20h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM14.5 20h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1z"/>
            <path fill={this.props.fill} d="M23.5 7H20V4c0-2.206-1.794-4-4-4H8C5.794 0 4 1.794 4 4v3H.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V8h1v13.5c0 .652.418 1.208 1 1.414v.586a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V23h8v.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-.586c.582-.206 1-.762 1-1.414V8h1v6.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM2 14H1V8h1v6zM5 4c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v2H5V4zm14 17.5c0 .275-.225.5-.5.5h-13a.5.5 0 0 1-.5-.5V16h14v5.5zm0-6.5H5V7h14v8zm4-1h-1V8h1v6z"/>
          </svg>
        )

      case 'Natural Resources':
      case 'Environment':
       return (
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 100 100">
          <path d="M97.251 73.084c-2.444 0-3.584-1.14-5.16-2.716-1.797-1.799-4.034-4.034-8.341-4.034s-6.543 2.235-8.34 4.034c-1.576 1.576-2.717 2.716-5.16 2.716-2.441 0-3.582-1.14-5.16-2.716-1.797-1.799-4.031-4.034-8.34-4.034s-6.543 2.235-8.34 4.034c-1.578 1.576-2.717 2.716-5.16 2.716s-3.582-1.14-5.16-2.716c-1.797-1.799-4.033-4.034-8.34-4.034-4.308 0-6.543 2.235-8.341 4.034-1.578 1.576-2.717 2.716-5.16 2.716-2.442 0-3.582-1.14-5.159-2.716-1.798-1.799-4.033-4.034-8.341-4.034a2.25 2.25 0 0 0 0 4.498c2.442 0 3.582 1.142 5.16 2.716 1.797 1.799 4.033 4.035 8.34 4.035 4.308 0 6.543-2.236 8.341-4.035 1.578-1.574 2.717-2.716 5.16-2.716s3.582 1.142 5.159 2.716c1.798 1.799 4.033 4.035 8.341 4.035s6.543-2.236 8.34-4.035c1.578-1.574 2.719-2.716 5.16-2.716s3.582 1.142 5.16 2.716c1.797 1.799 4.031 4.035 8.34 4.035 4.307 0 6.543-2.236 8.341-4.035 1.576-1.574 2.716-2.716 5.159-2.716s3.584 1.142 5.16 2.716c1.797 1.799 4.033 4.035 8.341 4.035a2.25 2.25 0 0 0 0-4.499zM2.75 57.332c2.442 0 3.582 1.142 5.16 2.716 1.797 1.799 4.033 4.034 8.34 4.034 4.308 0 6.543-2.235 8.341-4.034 1.578-1.574 2.717-2.716 5.16-2.716s3.582 1.142 5.159 2.716c1.798 1.799 4.033 4.034 8.341 4.034s6.543-2.235 8.34-4.034c1.578-1.574 2.72-2.716 5.16-2.716s3.582 1.142 5.16 2.716c1.797 1.799 4.03 4.034 8.34 4.034 4.306 0 6.543-2.235 8.341-4.034 1.576-1.574 2.717-2.716 5.159-2.716 2.444 0 3.584 1.142 5.16 2.716 1.797 1.799 4.034 4.034 8.341 4.034a2.25 2.25 0 0 0 0-4.498c-2.443 0-3.584-1.142-5.16-2.716-1.797-1.799-4.033-4.034-8.341-4.034-4.306 0-6.543 2.235-8.34 4.034-1.576 1.574-2.716 2.716-5.16 2.716-2.44 0-3.582-1.142-5.16-2.716-1.797-1.799-4.03-4.034-8.34-4.034s-6.543 2.235-8.34 4.034c-1.578 1.574-2.717 2.716-5.16 2.716s-3.582-1.142-5.16-2.716c-1.797-1.799-4.033-4.034-8.34-4.034-4.308 0-6.543 2.235-8.341 4.034-1.578 1.574-2.717 2.716-5.16 2.716-2.442 0-3.582-1.142-5.159-2.716-1.798-1.799-4.033-4.034-8.341-4.034a2.25 2.25 0 1 0 0 4.498z"/>
          <path d="M67.836 39.57v7.735l-.019 3.177a2.25 2.25 0 0 0 4.499 0l.007-1.732h.011v-2.751l.001-.249h-.001V32.82c7.62-1.097 13.5-7.651 13.5-15.57A2.25 2.25 0 0 0 83.585 15c-4.406 0-8.391 1.823-11.251 4.749V17.25a2.25 2.25 0 0 0-4.498 0v9.248c-2.86-2.925-6.847-4.748-11.251-4.748a2.25 2.25 0 0 0-2.25 2.25c0 7.918 5.88 14.472 13.501 15.57zm-.29-4.61a11.283 11.283 0 0 1-8.422-8.421 11.289 11.289 0 0 1 8.422 8.421zm5.078-6.749a11.287 11.287 0 0 1 8.422-8.422 11.287 11.287 0 0 1-8.422 8.422zM32.5 25.333a2.25 2.25 0 0 0-2.25-2.25c-4.404 0-8.391 1.823-11.251 4.748v-9.248a2.25 2.25 0 1 0-4.498 0v2.499c-2.86-2.926-6.845-4.749-11.251-4.749A2.25 2.25 0 0 0 1 18.583c0 7.919 5.88 14.473 13.5 15.57v12.93l.001.249v2.75h.011l.007 1.732a2.25 2.25 0 0 0 4.499 0l-.019-3.177v-7.735C26.62 39.806 32.5 33.251 32.5 25.333zm-4.79 2.54a11.283 11.283 0 0 1-8.422 8.421 11.286 11.286 0 0 1 8.422-8.421zm-21.921-6.75a11.287 11.287 0 0 1 8.422 8.422 11.286 11.286 0 0 1-8.422-8.422zm35.757 4.946v21.419l-.019 3.178a2.25 2.25 0 0 0 4.499 0l.007-1.733h.011v-2.75l.001-.249h-.001V19.319c7.62-1.097 13.5-7.651 13.5-15.57a2.25 2.25 0 0 0-2.25-2.25c-4.406 0-8.39 1.823-11.25 4.749V3.75a2.25 2.25 0 0 0-4.498 0v9.248c-2.86-2.925-6.847-4.748-11.251-4.748a2.25 2.25 0 0 0-2.25 2.25c0 7.917 5.881 14.472 13.501 15.569zm-.29-4.61a11.283 11.283 0 0 1-8.422-8.421 11.289 11.289 0 0 1 8.422 8.421zm5.078-6.749a11.287 11.287 0 0 1 8.421-8.422 11.28 11.28 0 0 1-8.421 8.422zM43.25 84.333a2.25 2.25 0 0 0 0-4.499 8.975 8.975 0 0 0-7.075 3.456c-2.244-2.113-5.763-3.456-9.8-3.456-6.939 0-12.375 3.953-12.375 9 0 5.046 5.436 8.999 12.375 8.999 4.037 0 7.556-1.343 9.8-3.456a8.98 8.98 0 0 0 7.075 3.456 2.25 2.25 0 0 0 0-4.499 4.506 4.506 0 0 1-4.5-4.5 4.506 4.506 0 0 1 4.5-4.501zm-16.875 9.001c-4.641 0-7.875-2.373-7.875-4.5 0-2.128 3.235-4.501 7.875-4.501s7.875 2.373 7.875 4.501c0 2.127-3.234 4.5-7.875 4.5zm57.375-9.001a2.25 2.25 0 0 0 0-4.499 8.971 8.971 0 0 0-7.074 3.456c-2.244-2.113-5.764-3.456-9.801-3.456-6.939 0-12.374 3.953-12.374 9 0 5.046 5.435 8.999 12.374 8.999 4.037 0 7.557-1.343 9.801-3.456a8.974 8.974 0 0 0 7.074 3.456 2.25 2.25 0 0 0 0-4.499c-2.48 0-4.5-2.021-4.5-4.5a4.507 4.507 0 0 1 4.5-4.501zm-16.875 9.001c-4.641 0-7.876-2.373-7.876-4.5 0-2.128 3.235-4.501 7.876-4.501s7.876 2.373 7.876 4.501c0 2.127-3.235 4.5-7.876 4.5z"/>
        </svg>
       )

      case 'Agriculture':
      case 'Water':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 100 100">
            <path fill={this.props.fill} d="M93.819 80.971c-4.61.337-8.224-1.933-11.825-4.353-.585-.394-1.835-.483-2.401-.124-6.018 3.829-12.523 5.519-19.499 3.887-2.99-.701-5.785-2.378-8.548-3.841-1.262-.666-2.026-.686-3.278.085-3.022 1.859-6.151 3.669-9.822 3.909-2.08.136-4.173.062-6.262.029-3.878-.057-7.132-1.808-10.234-3.901-1.553-1.049-2.953-1.102-4.531.03-3.808 2.734-8.017 4.38-12.796 4.14-1.909-.093-3.962-2.05-4.116-3.792-.14-1.583 1.694-3.46 3.741-3.824 4.565-.811 8.599-2.383 11.544-6.359 2.098-2.833 6.452-2.249 8.592.595 3.135 4.168 7.327 6.659 12.608 5.702 3.602-.648 6.763-2.681 9.047-5.758 1.831-2.469 5.653-2.886 7.646-.609 2.218 2.531 4.658 4.874 7.856 5.735 2.449.658 5.347.879 7.744.213 3.146-.875 5.764-3.095 7.824-5.807 1.71-2.248 5.62-1.901 7.43.347 2.817 3.507 6.317 5.94 11.013 6.341 1.062.089 2.516.523 2.996 1.293.718 1.156 1.087 2.796.903 4.135-.094.693-1.633 1.365-2.633 1.705-.92.312-1.995.165-2.999.222zM93.819 58.84c-4.61.337-8.224-1.931-11.825-4.351-.585-.396-1.835-.485-2.401-.125-6.018 3.831-12.523 5.519-19.499 3.888-2.99-.701-5.785-2.378-8.548-3.839-1.262-.67-2.026-.687-3.278.083-3.022 1.861-6.151 3.669-9.822 3.909-2.08.136-4.173.062-6.262.031-3.878-.059-7.132-1.81-10.234-3.903-1.553-1.047-2.953-1.102-4.531.03-3.808 2.734-8.017 4.38-12.796 4.141-1.909-.095-3.962-2.051-4.116-3.795-.14-1.582 1.694-3.458 3.741-3.82 4.565-.812 8.599-2.385 11.544-6.361 2.098-2.835 6.452-2.248 8.592.596 3.135 4.165 7.327 6.658 12.608 5.701 3.602-.65 6.763-2.681 9.047-5.756 1.831-2.471 5.653-2.888 7.646-.61 2.218 2.532 4.658 4.873 7.856 5.732 2.449.66 5.347.881 7.744.215 3.146-.875 5.764-3.097 7.824-5.805 1.71-2.251 5.62-1.904 7.43.344 2.817 3.507 6.317 5.942 11.013 6.34 1.062.09 2.516.523 2.996 1.294.718 1.155 1.087 2.795.903 4.135-.094.693-1.633 1.365-2.633 1.705-.92.314-1.995.166-2.999.221zM93.819 35.961c-4.61.338-8.224-1.929-11.825-4.35-.585-.395-1.835-.484-2.401-.125-6.018 3.831-12.523 5.519-19.499 3.886-2.99-.7-5.785-2.377-8.548-3.839-1.262-.669-2.026-.686-3.278.084-3.022 1.862-6.151 3.668-9.822 3.909-2.08.137-4.173.062-6.262.03-3.878-.056-7.132-1.809-10.234-3.901-1.553-1.048-2.953-1.102-4.531.03-3.808 2.734-8.017 4.379-12.796 4.14C2.714 35.73.661 33.774.507 32.032c-.14-1.582 1.694-3.459 3.741-3.822 4.565-.812 8.599-2.384 11.544-6.361 2.098-2.833 6.452-2.25 8.592.596 3.135 4.167 7.327 6.659 12.608 5.703 3.602-.652 6.763-2.681 9.047-5.758 1.831-2.469 5.653-2.887 7.646-.61 2.218 2.532 4.658 4.873 7.856 5.734 2.449.658 5.347.879 7.744.215 3.146-.875 5.764-3.099 7.824-5.807 1.71-2.251 5.62-1.904 7.43.346 2.817 3.507 6.317 5.942 11.013 6.338 1.062.09 2.516.524 2.996 1.295.718 1.155 1.087 2.795.903 4.133-.092.696-1.631 1.366-2.631 1.706-.922.314-1.997.166-3.001.221z"/>
          </svg>
        )

      case 'Government':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 24 24">
            <path fill={this.props.fill} d="M23.5 23H.5a.5.5 0 0 0 0 1h23a.5.5 0 0 0 0-1zM.5 22h23a.5.5 0 0 0 0-1H22v-1.5a.5.5 0 0 0-.5-.5H21V9h1.5a.5.5 0 0 0 .5-.5V6.599c.007-.033.02-.064.02-.099 0-.06-.033-.106-.052-.159-.005-.017-.009-.034-.016-.049a.495.495 0 0 0-.239-.24c-.014-.006-.021-.022-.037-.027L12.248.066a.499.499 0 0 0-.496 0l-10.5 6c-.025.014-.044.035-.065.053-.017.014-.035.025-.049.04a.486.486 0 0 0-.091.135l-.008.013a.503.503 0 0 0-.036.177c0 .006-.003.011-.003.016v2a.5.5 0 0 0 .5.5H3v10h-.5a.5.5 0 0 0-.5.5V21H.5a.5.5 0 0 0 0 1zM20 19h-1V9h1v10zm-4 0V9h2v10h-2zm-2 0V9h1v10h-1zm-3 0V9h2v10h-2zm-2 0V9h1v10H9zm-3 0V9h2v10H6zm6-17.924L20.617 6H3.383L12 1.076zM2 7h20v1H2V7zm2 2h1v10H4V9zM3 20h18v1H3v-1z"/>
          </svg>
        )

      case 'City Planning':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 24 24">
            <path fill={this.props.fill} d="M7.5 20a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1h5zM2.5 18h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM2.5 14h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM2.5 16h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM6.5 5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM2.5 10h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM2.5 12h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM18.5 18h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 16h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 12h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 14h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM11.5 18h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 20h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1z"/>
            <path fill={this.props.fill} d="M23.5 9H23V6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V9h-.5a.5.5 0 0 0-.5.5V13h-6V7.5a.5.5 0 0 0-.5-.5H9V3.5a.5.5 0 0 0-.5-.5H5V.5a.5.5 0 0 0-1 0V3H1.5a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-.5-.5zM2 4h6v3H2V4zM1 8h8v15H6v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V23H1V8zm3 15v-1h1v1H4zm12 0h-6v-9h6v9zm2-16h4v2h-4V7zm2 16v-1h1v1h-1zm3 0h-1v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V23h-2V10h6v13z"/>
            <path fill={this.props.fill} d="M11.5 16h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM14.5 19h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
          </svg>
        )

    }
  }
}

TopicImage.defaultProps = {
  title: "City Planning",
  width: 24,
  height: 24
};

export default TopicImage
