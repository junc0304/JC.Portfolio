

class JobItem {
  constructor( id, company, position, postDate, startDate, endDate, isActive, stack, viewCount, tags ) {
    this.id= id;
    this.company = company;
    this.position = position;
    this.postDate = new Date(postDate);
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.isActive = isActive;
    this.stack = stack;
    this.viewCount = viewCount;
    this.tags = tags;
  }
}

module.exports = Job;