const itSchool = {
  name: 'Simple Online School',
  description: 'This is a description of our super truper online school',
  maxGroupCount: 5,
  maxStudentCountPerGroup: 12,
  availableCourses: ['Front-end Basic', 'Front-end Pro'],
  startedGroups: [],
  // example of started group --- { courseName: 'Front-End Pro', amountOfStudents:10 }
  __callbacks: {},
  __supportedEventTypes: ['GROUP_STARTED', 'GROUP_ENDED'],

  // методы
  startLearningGroup(courseName, amountOfStudents) {
    if (this.availableCourses.includes(courseName)) {
      if (amountOfStudents <= this.maxStudentCountPerGroup) {
        if (
          !this.startedGroups.some(
            startedGroup => startedGroup.courseName === courseName,
          )
        ) {
          this.startedGroups.push({ courseName, amountOfStudents });
          this.dispatch('GROUP_STARTED', courseName);
          console.log(`${courseName} group has started.`);
        } else {
          console.log(
            `${courseName} has already started, we cannot start it again until it finishes.`,
          );
        }
      } else {
        console.log(
          `Sorry, ${courseName} the group cannot be ${amountOfStudents} students.`,
        );
      }
    } else {
      console.log(
        `Sorry, ${courseName} group is not available at this moment.`,
      );
    }
  },

  endLearningGroup(courseName) {
    if (
      this.startedGroups.some(
        startedGroup => startedGroup.courseName === courseName,
      )
    ) {
      this.startedGroups = this.startedGroups.filter(
        startedGroup => startedGroup.courseName !== courseName,
      );
      this.dispatch('GROUP_ENDED', courseName);
      console.log(`${courseName} group has successfully finished.`);
    } else {
      console.log(
        `An error has occurred. ${courseName} group hasn't started yet.`,
      );
    }
  },

  on(eventName, callback) {
    if (this.__supportedEventTypes.includes(eventName))
      this.__callbacks[eventName] = callback;
  },

  dispatch(eventName, courseName) {
    this.__callbacks[eventName] && this.__callbacks[eventName](courseName);
  },
};

itSchool.on('GROUP_STARTED', courseName =>
  console.log(`Startes ${courseName} group!`),
);

itSchool.on('GROUP_ENDED', courseName =>
  console.log(`Group with ${courseName} course successfully finished!`),
);

// старт групп
itSchool.startLearningGroup('Front-end Pro', 10);
itSchool.startLearningGroup('Front-end Basic', 4);
itSchool.startLearningGroup('Python Basic', 6);

// конец групп
itSchool.endLearningGroup('Front-end Basic');
itSchool.endLearningGroup('Python Basic');
