import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';

function BlogPost({theme}) {

  const fakeBlog = {
    title: "How CRISPR could help save crops from devastation caused by pests",
    author: "Salal Humair",
    date: "12/21/2022",
    snippet: "Gene editing insects could help reduce reliance on pesticides—and help protect billion-dollar industries.",
    text: "Attorney General Merrick Garland made an unannounced trip to Ukraine on Friday, according to a Justice Department official, his second trip to the country after Russia invaded a little more than a year ago. The trip was not announced for security reasons, the official said. Garland was invited to Lviv by the Ukrainian prosecutor general, the official said, and joined President Volodymyr Zelensky at the “United for Justice Conference.” The official added that Garland “held several meetings and reaffirmed our determination to hold Russia accountable for crimes committed in its unjust and unprovoked invasion against its sovereign neighbor.” The trip comes nearly two weeks after President Joe Biden made his first trip to Ukraine since the war began and is one of several trips made by members of Biden’s Cabinet. Treasury Secretary Janet Yellen also recently made a trip to Ukraine to meet with Zelensky. The attorney general last went to Ukraine in June and similarly committed the United States’ assistance in finding and prosecuting those who committed war crimes. During that trip, Garland announced that he was appointing Eli Rosenbaum, the top US so-called “Nazi hunter,” to lead a Justice Department team to identify and prosecute war criminals. On Wednesday, Garland testified to the Senate Judiciary Committee that he believed the Russian government was committing crimes against humanity and said the Justice Department supports efforts by The Hague to investigate and prosecute those crimes. “The United States supports what is now being developed in The Hague, sponsored by Eurojust, looking into the possibility of creating that court [to charge crimes of aggression,]” Garland testified. “There are concerns that we have to take into account with respect to how that might deal with our own service members and other circumstances,” he continued. “We have to be sure that the appropriate guardrails are up. But we support any number of different ways in which war crimes, crimes against humanity, and the potential for crimes against aggression are investigated.” The Justice Department has taken several steps to hold the Russian government and its supporters accountable since the invasion began. The Justice Department’s Task Force KleptoCapture – made up of federal prosecutors, investigators and analysts – has worked for the past year to target the complex web of wealth surrounding Russian oligarchs and Kremlin insiders. Since the beginning of the war, the Justice Department has seized more than $500 million in yachts, properties and other assets from people who support the Russian government and have evaded US sanctions, according to a department news release. The department has also brought over 30 indictments against sanctioned supporters of the Kremlin and Russian military, the department has said, some of which have directly implicated individuals in supporting the war in Ukraine. This story has been updated with additional reporting.",
    tags: ["Artificial Intelligence", "Panel", "Admissions"],
    image1: 'https://source.unsplash.com/random/800x450',
    image2: 'https://source.unsplash.com/random/800x450',
  };

  return (
    <ThemeProvider theme={theme}>
    <div style={{padding: '16px'}}>
      <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary">
        {fakeBlog.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{mb:2}}>
        By {fakeBlog.author} on {fakeBlog.date}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              style={{height: '0', paddingTop: '56.25%', width: '400px', alignContent: 'right'}}
              image={fakeBlog.image1}
              title="Image 1"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              style={{height: '0', paddingTop: '56.25%', width: '400px'}}
              image={fakeBlog.image2}
              title="Image 2"
            />
          </Card>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{textAlign: 'justify'}} color="text.secondary">
          {fakeBlog.text}
        </Typography>
      </CardContent>
    </div>
    </ThemeProvider>
  );
}

export default BlogPost;
