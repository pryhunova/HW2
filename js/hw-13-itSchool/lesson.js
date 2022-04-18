class Lesson {
  topics = [];

  constructor(title, topics) {
    this.title = title;
    this.topics = Array.isArray(topics) ? topics : this.topics;
  }
}
