const itSchool = {
  name: 'Simple Online School',
  description: 'Simple Online School description.',
  maxGroupCount: 5,
  maxStudentCountPerGroup: 12,
  availableCourses: ['Front-end Basic', 'Front-end Pro'],
  startedGroups: [],
  __callbacks: {},
  __supportedEventTypes: [
    'GROUP_STARTED',
    'COURSE_ADD',
    'GROUP_ENDED',
    'COURSE_REMOVE',
  ],

  // методы
  startLearningGroup(courseName, amountOfStudents, totalLessons) {
    if (this.availableCourses.includes(courseName)) {
      if (amountOfStudents <= this.maxStudentCountPerGroup) {
        if (
          !this.startedGroups.some(
            startedGroup => startedGroup.courseName === courseName,
          )
        ) {
          this.startedGroups.push({
            courseName,
            amountOfStudents,
            totalLessons,
            passedLessons: 0,
          });
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

  addCourse(courseName) {
    if (!this.availableCourses.includes(courseName)) {
      this.availableCourses.push(courseName);
      this.dispatch('COURSE_ADD', courseName);
    }
  },

  doneLesson(courseName) {
    let course = this.startedGroups.find(
      startedGroup => startedGroup.courseName === courseName,
    );
    if (course) {
      course.passedLessons++;
      console.log(`The number of lessons passed ${course.passedLessons}.`);
    }
  },

  endLearningGroup(courseName) {
    if (
      this.startedGroups.some(
        startedGroup => startedGroup.courseName === courseName,
      )
    ) {
      if (this.startedGroups.totalLessons > this.startedGroups.passedLessons) {
        console.log(`You can't finish the course ${courseName} ahead of time.`);
      } else {
        this.startedGroups = this.startedGroups.filter(
          startedGroup => startedGroup.courseName !== courseName,
        );
        this.dispatch(this.__supportedEventTypes.GROUP_ENDED, courseName);
      }
    } else {
      console.log(`${courseName} group hasn't started yet.`);
    }
  },

  removeCourse(courseName) {
    if (this.availableCourses.some(course => course === courseName)) {
      this.availableCourses = this.availableCourses.filter(
        course => course !== courseName,
      );
      this.dispatch('COURSE_REMOVE', courseName);
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

itSchool.on('COURSE_ADD', courseName =>
  console.log(`Course ${courseName} added to the list of active courses.`),
);

itSchool.on(itSchool.__supportedEventTypes.GROUP_ENDED, courseName =>
  console.log(`Group with ${courseName} course successfully finished!`),
);

itSchool.on('COURSE_REMOVE', courseName =>
  console.log(`Course ${courseName} removed from the list of active courses.`),
);

// старт групп
itSchool.startLearningGroup('Front-end Pro', 5);
itSchool.startLearningGroup('Front-end Basic', 16);
itSchool.startLearningGroup('Python Basic', 00);
itSchool.addCourse('QA');
// console.log(itSchool.availableCourses);

//Прохождение нового урока
itSchool.doneLesson('Front-end Pro');

// конец групп
itSchool.endLearningGroup('Front-end Basic');
itSchool.endLearningGroup('Python Basic');
itSchool.removeCourse('QA');

// console.log(itSchool.availableCourses);
