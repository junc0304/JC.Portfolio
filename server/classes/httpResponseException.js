export class HttpResponseException {
  constructor(state, details) {
    this.state = state;
    this.details = details;
  }
}