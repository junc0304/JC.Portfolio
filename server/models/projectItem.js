

class ProjectItem {
  constructor( id, title, members, postDate, startDate, endDate, isActive, stack, viewCount, description, repo, links, tags ) {
    this.id = id;
    this.title = title;
    this.members = members;
    this.postDate = new Date(postDate);
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.isActive = isActive;
    this.stack = stack;
    this.viewCount = viewCount;
    this.description = description;
    this.repo = repo;
    this.links = links;
    this.tags = tags;
  }

}

module.exports = Project;