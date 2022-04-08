const itSchool = {
  name: 'Simple Online School',
  description: 'Simple Online School description.',
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
          this.dispatch(this.__supportedEventTypes.GROUP_STARTED, courseName);
        } else {
          console.log(`${courseName} has already started.`);
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
      this.dispatch(this.__supportedEventTypes.GROUP_ENDED, courseName);
    } else {
      console.log(`${courseName} group hasn't started yet.`);
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

itSchool.on(itSchool.__supportedEventTypes.GROUP_STARTED, courseName =>
  console.log(`Startes ${courseName} group!`),
);

itSchool.on(itSchool.__supportedEventTypes.GROUP_ENDED, courseName =>
  console.log(`Group with ${courseName} course successfully finished!`),
);

// старт групп
itSchool.startLearningGroup('Front-end Pro', 5);
itSchool.startLearningGroup('Front-end Basic', 16);
itSchool.startLearningGroup('Python Basic', 00);

// конец групп
itSchool.endLearningGroup('Front-end Basic');
itSchool.endLearningGroup('Python Basic');
