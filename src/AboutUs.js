import { Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider } from '@mui/material/styles';
  
function AboutUs({theme}) {
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

      const members = [
        {
             name: 'Abe',
             position: 'President',
             image: 'https://source.unsplash.com/random/200x200',
             profileUrl: 'https://example.com/abe',
        },
        {
            name: 'Emilia',
            position: 'Head of Website Development',
            image: 'https://source.unsplash.com/random/200x201',
            profileUrl: 'https://example.com/emilia',
        },
        {
            name: 'Kurtis',
            position: 'Website Developer',
            image: 'https://source.unsplash.com/random/200x202',
            profileUrl: 'https://example.com/kurtis',
        }
        // Add more members as needed
      ];

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
            {members.map((member) => (
              <Grid item key={member.name} style={styles.member}>
                <Avatar alt={member.name} src={member.image} sx={styles.avatar} variant="square"/>
                <Typography variant="subtitle1" style={styles.name}>
                  {member.name}
                </Typography>
                <Typography variant="body2" style={styles.position}>
                  {member.position}
                </Typography>
                <Typography variant="body2" component="a" href={member.profileUrl} target="_blank">
                  {member.profileUrl}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </section>
        </ThemeProvider>
      );
    }

export default AboutUs;
