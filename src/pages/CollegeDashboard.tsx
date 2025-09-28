import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  School, 
  Users,
  BookOpen,
  Calendar,
  Upload,
  Edit,
  Plus,
  Eye,
  Download,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star
} from "lucide-react";

const CollegeDashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alex Rodriguez", course: "Computer Science", year: "3rd Year", status: "Active", gpa: "3.8" },
    { id: 2, name: "Emily Chen", course: "Business Administration", year: "2nd Year", status: "Active", gpa: "3.6" },
    { id: 3, name: "Rajesh Kumar", course: "Engineering", year: "4th Year", status: "Active", gpa: "3.9" },
    { id: 4, name: "Sarah Johnson", course: "Psychology", year: "1st Year", status: "Active", gpa: "3.7" }
  ]);

  const [courses, setCourses] = useState([
    { id: 1, name: "Computer Science", department: "Engineering", students: 120, capacity: 150, duration: "4 years" },
    { id: 2, name: "Business Administration", department: "Business", students: 95, capacity: 100, duration: "3 years" },
    { id: 3, name: "Mechanical Engineering", department: "Engineering", students: 80, capacity: 100, duration: "4 years" },
    { id: 4, name: "Psychology", department: "Arts & Sciences", students: 65, capacity: 80, duration: "4 years" }
  ]);

  const [admissions, setAdmissions] = useState([
    { id: 1, applicantName: "John Smith", course: "Computer Science", applicationDate: "2024-01-20", status: "pending", testScore: "85%" },
    { id: 2, applicantName: "Maria Garcia", course: "Business Administration", applicationDate: "2024-01-22", status: "pending", testScore: "78%" },
    { id: 3, applicantName: "David Wilson", course: "Engineering", applicationDate: "2024-01-18", status: "approved", testScore: "92%" },
    { id: 4, applicantName: "Lisa Brown", course: "Psychology", applicationDate: "2024-01-25", status: "pending", testScore: "88%" }
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: "Orientation Week", date: "2024-03-01", type: "Academic", attendees: 250 },
    { id: 2, title: "Career Fair", date: "2024-03-15", type: "Career", attendees: 180 },
    { id: 3, title: "Annual Sports Meet", date: "2024-04-05", type: "Sports", attendees: 300 },
    { id: 4, title: "Tech Symposium", date: "2024-04-20", type: "Academic", attendees: 150 }
  ]);

  const quickStats = [
    { label: "Total Students", value: students.length.toString(), icon: Users, color: "text-primary" },
    { label: "Active Courses", value: courses.length.toString(), icon: BookOpen, color: "text-secondary" },
    { label: "Pending Admissions", value: admissions.filter(a => a.status === 'pending').length.toString(), icon: GraduationCap, color: "text-accent" },
    { label: "Upcoming Events", value: events.filter(e => new Date(e.date) > new Date()).length.toString(), icon: Calendar, color: "text-success" }
  ];

  const handleAdmissionDecision = (id: number, decision: 'approved' | 'rejected') => {
    setAdmissions(prev => prev.map(admission => 
      admission.id === id ? { ...admission, status: decision } : admission
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="hero-gradient text-white py-12">
        <div className="section-container">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">College Dashboard</h1>
            <p className="text-white/90 text-lg">Manage students, courses, admissions, and campus activities</p>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Student Management
                </span>
                <Button size="sm" data-testid="button-add-student">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.slice(0, 3).map((student) => (
                  <div key={student.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold" data-testid={`text-student-name-${student.id}`}>{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.course} • {student.year}</p>
                      </div>
                      <Badge variant="default">GPA: {student.gpa}</Badge>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-edit-student-${student.id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-view-student-${student.id}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" data-testid="button-view-all-students">
                  View All Students ({students.length})
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Course Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-secondary" />
                  Course Management
                </span>
                <Button size="sm" data-testid="button-add-course">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Course
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.slice(0, 3).map((course) => (
                  <div key={course.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold" data-testid={`text-course-name-${course.id}`}>{course.name}</h4>
                        <p className="text-sm text-muted-foreground">{course.department} • {course.duration}</p>
                      </div>
                      <Badge variant="outline">{course.students}/{course.capacity}</Badge>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" data-testid={`button-edit-course-${course.id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-view-course-${course.id}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" data-testid="button-view-all-courses">
                  View All Courses ({courses.length})
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Admission Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-accent" />
                  Admission Requests
                </span>
                <Badge variant="secondary">{admissions.filter(a => a.status === 'pending').length} pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {admissions.filter(a => a.status === 'pending').slice(0, 3).map((admission) => (
                  <div key={admission.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold" data-testid={`text-applicant-name-${admission.id}`}>{admission.applicantName}</h4>
                        <p className="text-sm text-muted-foreground">{admission.course}</p>
                      </div>
                      <Badge variant="outline">Score: {admission.testScore}</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Applied: {admission.applicationDate}
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-green-600 border-green-600"
                        onClick={() => handleAdmissionDecision(admission.id, 'approved')}
                        data-testid={`button-approve-admission-${admission.id}`}
                      >
                        <GraduationCap className="mr-1 h-3 w-3" />
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-red-600 border-red-600"
                        onClick={() => handleAdmissionDecision(admission.id, 'rejected')}
                        data-testid={`button-reject-admission-${admission.id}`}
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" data-testid="button-view-all-admissions">
                  View All Applications ({admissions.length})
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Campus Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-success" />
                  Campus Events
                </span>
                <Button size="sm" data-testid="button-add-event">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.slice(0, 3).map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold" data-testid={`text-event-title-${event.id}`}>{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.type} Event</p>
                      </div>
                      <Badge variant="outline">{event.attendees} attendees</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {event.date}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" data-testid={`button-edit-event-${event.id}`}>
                        <Edit className="mr-1 h-3 w-3" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" data-testid={`button-view-event-${event.id}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" data-testid="button-view-all-events">
                  View All Events ({events.length})
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* College Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <School className="mr-2 h-5 w-5" />
              College Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-primary/5">
                <School className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-primary mb-2">Campus Profile</h4>
                <p className="text-sm text-muted-foreground mb-4">Update college information, facilities, and accreditation details</p>
                <Button variant="outline" size="sm" data-testid="button-update-profile">
                  <Edit className="mr-2 h-4 w-4" />
                  Update Profile
                </Button>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/5">
                <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-secondary mb-2">Rankings & Reviews</h4>
                <p className="text-sm text-muted-foreground mb-4">Monitor college rankings and student feedback</p>
                <Button variant="outline" size="sm" data-testid="button-view-rankings">
                  <Eye className="mr-2 h-4 w-4" />
                  View Rankings
                </Button>
              </div>
              <div className="text-center p-6 rounded-lg bg-success/5">
                <Upload className="h-12 w-12 text-success mx-auto mb-4" />
                <h4 className="font-semibold text-success mb-2">Documents & Resources</h4>
                <p className="text-sm text-muted-foreground mb-4">Upload brochures, syllabus, and official documents</p>
                <Button variant="outline" size="sm" data-testid="button-upload-documents">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Documents
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeDashboard;