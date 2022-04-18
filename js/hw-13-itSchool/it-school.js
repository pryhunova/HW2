class ITSchool {
  availableCourses = [];
  startedLearningGroups = [];

  constructor(name, description, maxGroupsCount, maxStudentsCountPerGroup) {
    this.name = name;
    this.description = description;
    this.maxGroupsCount = maxGroupsCount;
    this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
  }

  registerCourse(courseName, totalLessons, availableTeachersAmount) {
    if (this.availableCourses.some(course => course.name === courseName)) {
      return `Course ${courseName} already exist.`;
    }

    this.availableCourses.push(
      new Course(courseName, totalLessons, availableTeachersAmount),
    );
  }

  startLearningGroup(courseName, teacherName, amountOfStudents) {
    const courseForNewLearningGroup = this.availableCourses.find(
      course => course.name === courseName && course.availableTeachersAmount,
    );

    if (courseForNewLearningGroup) {
      this.startedLearningGroups.push(
        new LearningGroup(courseName, teacherName, amountOfStudents),
      );
      courseForNewLearningGroup.availableTeachersAmount -= 1;
    }
  }

  endLearningGroup(courseName, teacherName) {
    this.startedLearningGroups = this.startedLearningGroups.filter(
      group =>
        group.courseName !== courseName && group.teacherName !== teacherName,
    );
  }

  getLearningGroups(courseName) {
    return this.startedLearningGroups.filter(
      group => group.courseName === courseName,
    );
  }
}
