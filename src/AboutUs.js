import { Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from 'react';
import Request from "./API/Request";
import ComponentLoader from "./common/Loader/ComponentLoader";
import Box from "@mui/material/Box";
function AboutUs({theme}) {
    const [loading, setLoading] = useState(false)
    const [members, setMembers] = useState([
        {
            name: 'Abe',
            position: 'President',
            image: '',
            profileURL: "abe_profile.JPG",
            description: 'Abe Hou is a current senior at Johns Hopkins University. He is passionate about LLM research and planning to get a Phd in Computer Science. At TPS, he is the current president. He organizes meetings and events and acts as the representative face of the organization\n',
        },
        {
            name: 'Angela',
            position: 'Marketing and Sponsorship',
            image: '',
            profileURL: "angela_profile.jpeg",
            description: 'Angela is a senior at Johns Hopkins University double majoring in Political Science and Psychology. She is fascinated by the intersection of policy, society, and human behavior. At TPS, Angela is supporting the organization of the upcoming TPS AI Policy Hackathon.',
        },
        {
            name: 'Idris',
            position: 'Head of Research',
            image: '',
            profileURL: "idris_profile.jpeg",
            description: 'Idris Sunmola is a 3rd year Ph.D. student in the Computer Science department at The Johns Hopkins University. He does his research at the intersection of machine learning and surgical robotics. At TPS, he acts as the head of research and editor in chief of publications. His goal is to be a conduit between scientists, policy makers, and the general public.',
        },
        {
            name: 'Jasmine',
            position: 'Researcher and Writer',
            image: '',
            profileURL: "jasmine_profile.jpg",
            description: 'Jasmine Lafita is a sophomore at Johns Hopkins majoring in Political Science and Cognitive Science and minoring in Computer Science. Her research interests include the intersection of artificial intelligence and law and policy, as well as AI ethics. At JHU, Jasmine is helping to organize TPS’s Policy Hackathon, as well as serving as the Director of Programming for the Undergraduate Law Review and the Treasurer of the Political Science Steering Committee.',
        },
        {
            name: 'Nathan',
            position: 'Academic Relations Chair',
            image: '',
            profileURL: "nathan_profile.JPG",
            description: 'Seokhyun (Nathan) Baek is a core member of the Technology & Policy Society (TPS) and a freshman at Johns Hopkins University double majoring in International Studies and Political Science with a minor in Computer Science. He hopes to concentrate in tech policy throughout his studies and encourage AI governance discussions on privacy. At TPS, he is currently working on the sponsorship team to expand the group’s scale of impact.\n',
        },
        {
            name: 'Amy',
            position: 'Marketing Chair',
            image: '',
            profileURL: 'yumeng_profile.JPG',
            description: 'Amy is a senior at Johns Hopkins University double majoring in Applied Mathematics and Computer Science. She is passionate to advocate for ethical use of AI. At TPS, Amy is supporting the organization of the upcoming TPS AI Policy Hackathon.',
        },
        {
            name: 'Andreas',
            position: 'Website Developer',
            image: '',
            profileURL: 'andreas_profile.jpg',
            description: 'Andreas is a junior at Johns Hopkins University majoring in Computer Science. He is passionate in Computer Graphics and Game Development. He has prior industry experience and looking to do research in the future. At TPS, Andreas helped develop this very website. Andreas also supports facilitating corporate connections and help with research papers for the TPS Paper Database.',
        }
        // Add more members as needed
    ]);
    const styles = {
        container: {
          padding: theme.spacing(8, 0),
        },
        summary: {
          maxWidth: 600,
          margin: 'auto',
          textAlign: 'center',
          marginBottom: theme.spacing(4),
        },
        member: {
          margin: theme.spacing(2),
        },
        name: {
          marginTop: theme.spacing(1),
          fontWeight: 'bold',
        },
        position: {
          color: theme.palette.text.secondary,
          marginTop: theme.spacing(0.5),
        },
        avatar: {
          width: 200,
          height: 200,
        },
      };
    const Req = new Request();

        useEffect(() => {
            getProfileImages();
        },[]);

        async function getProfileImages() {
            let memberList = members;
            setLoading(true)
            let promiseList = [];
            memberList.map((member) => {
                promiseList.push(Req.getFile("member_photos", member.profileURL).then((url) => {
                    member.image = url;
                }));
            })
            await Promise.all(promiseList);
            setMembers(memberList)
            setLoading(false)
        }


      return (
        <ThemeProvider theme={theme}>
        <section style={styles.container}>
          <div>
            {/* Big photo */}
            <img src="https://source.unsplash.com/random/800x400" alt="Team" />
          </div>
          <div style={{...styles.summary, marginTop: theme.spacing(4)}}>
            {/* Summary */}
            <Typography variant="body1" color="textSecondary">
              Technology and Policy Society at Johns Hopkins (TPS@JHU) is a non-profit policy society sponsored by the Berman Institute of Bioethics, aimed at facilitating policy research and dialogues and impacting key decision-makers in the policy sphere. "Citizens of future society, unite!"
            </Typography>
          </div>
          <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.secondary" align="center">
              Meet the Team
            </Typography>
          <Grid container justifyContent="center">
            {/* Members */}
              {loading && <ComponentLoader/>}

            {!loading && members.map((member) => (
              <Grid item key={member.name} style={styles.member}>
                  {console.log(member.image)}
                {/*<Avatar alt={member.name} src={member.image} sx={styles.avatar} variant="square"/>*/}
                <img src={member.image} alt={member.name} style={styles.avatar} />
                  <Typography variant="subtitle1" style={styles.name} >
                  {member.name}
                </Typography>
                <Typography variant="body2" style={styles.position}>
                  {member.position}
                </Typography>
                  <Box sx={{ display: 'inline-flex', maxWidth: 200 }}>
                      <Typography variant="body2"  component="a"  target="_blank" align={"left"}>
                          {member.description}
                      </Typography>
                  </Box>
              </Grid>
            ))}
          </Grid>
        </section>
        </ThemeProvider>
      );
    }

export default AboutUs;
