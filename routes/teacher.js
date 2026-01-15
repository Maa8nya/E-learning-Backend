// routes/teacher.js ---------- Maanya & Namrata

const express = require('express');
const router = express.Router();

// Middleware
const { protect } = require('../middleware/authMiddleware');

// Controller
const teacherController = require('../controllers/teacherController');

// ================= TEACHER PROFILE & SUBJECT ROUTES =================
router.get('/profile', protect, teacherController.getTeacherProfile);
router.put('/update-subjects', protect, teacherController.updateTeacherSubjects);

// ================= TEACHER NOTES ROUTES =================
router.post(
  '/upload-note',
  protect,
  teacherController.uploadMiddleware,
  teacherController.uploadNote
);

router.get('/my-notes', protect, teacherController.getMyNotes);
router.get('/approved-notes', protect, teacherController.getApprovedNotes);
router.get('/download/:id', protect, teacherController.downloadNote);
router.get(
  '/note-count-by-class-subject',
  protect,
  teacherController.getNotesCountByClassAndSubject
);
router.get('/notes/view/:id', teacherController.viewNote);

// ================= TEACHER MEETING ROUTES =================
router.post('/schedule-meeting', protect, teacherController.scheduleMeeting);
router.post('/start-instant-meeting', protect, teacherController.startInstantMeeting);
router.get('/my-meetings', protect, teacherController.getMyMeetings);

// ================= ASSIGNMENTS =================
router.post(
  '/upload-assignment',
  protect,
  teacherController.uploadAssignmentMiddleware,
  teacherController.uploadAssignment
);

router.get('/my-assignments', protect, teacherController.getMyAssignments);
router.get('/download-assignment/:id', protect, teacherController.downloadAssignment);

// ================= MARKS =================
router.post('/student-marks', protect, teacherController.getStudentMarks);
router.post('/class-marks', protect, teacherController.getClassMarks);
router.get('/my-uploaded-marks', protect, teacherController.getMyUploadedMarks);

router.get(
  '/students/:className/:subjectName',
  protect,
  teacherController.getStudentsByClassAndSubject
);

router.post(
  '/upload-marks-rollnumber',
  protect,
  teacherController.uploadMarksByRollNumber
);

router.post(
  '/upload-multiple-marks-rollnumber',
  protect,
  teacherController.uploadMultipleMarksByRollNumber
);

// ================= SUBJECTS =================
router.post('/add-subject', protect, teacherController.addScheduledSubject);
router.get('/subjects/:teacherId', protect, teacherController.getSubjectsByClass);
router.get('/my-subjects', protect, teacherController.getSubjectsByTeacher);

// ================= TESTS =================
router.post('/create-test', protect, teacherController.teacherCreateTest);
router.get('/my-tests', protect, teacherController.getTeacherTests);
router.get(
  '/test-count-by-class-subject',
  protect,
  teacherController.getTotalTestsByTeacherForSubject
);

// ================= ANNOUNCEMENTS =================
router.post('/create-announcement', protect, teacherController.createAnnouncement);
router.get('/my-announcements', protect, teacherController.getMyAnnouncements);
router.put(
  '/update-announcement/:id',
  protect,
  teacherController.updateAnnouncement
);
router.delete(
  '/delete-announcement/:id',
  protect,
  teacherController.deleteAnnouncement
);

// ================= LESSON PLANNER =================
router.post('/add', protect, teacherController.addLesson);
router.get('/my-lessons', protect, teacherController.getMyLessons);
router.get(
  '/next-lesson/:subjectId',
  protect,
  teacherController.getNextLessonForSubject
);
router.get('/next-lesson', protect, teacherController.getNextLesson);

// ================= DASHBOARD & REPORTS =================
router.get(
  '/dashboard/:teacherId',
  protect,
  teacherController.getTeacherDashboard
);

router.get(
  '/attendance/weekly/:teacherId',
  protect,
  teacherController.getWeeklyAttendance
);

router.get(
  '/subject-performance/:teacherId',
  protect,
  teacherController.getSubjectPerformance
);

router.get(
  "/grade-distribution/:teacherId",
  teacherController.getGradeDistribution
);

router.get(
  "/assignment-status/:teacherId",
  teacherController.getAssignmentStatus
);

router.get(
  "/monthly-trend/:teacherId",
  teacherController.getMonthlyTrend
);

module.exports = router;
