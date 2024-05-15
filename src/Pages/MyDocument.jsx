
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';



const MyDocument = ({ appliedJob }) => (

    <Document>
        <Page size="A4" style={styles.page}>
            {appliedJob.map((job, index) => (
                <View key={job._id} style={styles.section}>
                    <Text style={styles.title}>Job Application</Text>

                    <Image style={styles.banner} src={job.job_banner} />

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Job Title:</Text>
                        <Text style={styles.value}>{job.job_title}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Employer Name:</Text>
                        <Text style={styles.value}>{job.employer_name}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Employer Email:</Text>
                        <Text style={styles.value}>{job.employer_email}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Job Category:</Text>
                        <Text style={styles.value}>{job.job_category}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Job Description:</Text>
                        <Text style={styles.value}>{job.job_description}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Salary Range:</Text>
                        <Text style={styles.value}>{`$${job.min_salary} - $${job.max_salary}`}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Job Posting Date:</Text>
                        <Text style={styles.value}>{new Date(job.job_posting_date).toLocaleDateString()}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Application Deadline:</Text>
                        <Text style={styles.value}>{new Date(job.application_deadline).toLocaleDateString()}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Number of Applicants:</Text>
                        <Text style={styles.value}>{job.job_applicants_number}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Applicant Name:</Text>
                        <Text style={styles.value}>{job.applicant_name}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Applicant Email:</Text>
                        <Text style={styles.value}>{job.applicant_email}</Text>
                    </View>

                    <View style={styles.jobDetail}>
                        <Text style={styles.label}>Applicant Resume:</Text>
                        <Text style={styles.value}>{job.applicant_resume}</Text>
                    </View>
                </View>
            ))}
        </Page>
    </Document>
);

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      backgroundColor: '#fff',
      borderRadius: 5,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
    },
    banner: {
      width: '100%',
      height: 150,
      marginBottom: 10,
    },
    jobDetail: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    label: {
      fontWeight: 'bold',
      width: 150,
    },
    value: {
      flexShrink: 1,
    },
  });

export default MyDocument;
