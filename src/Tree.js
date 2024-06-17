import React,  {useState} from 'react';
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader  
} from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import { Typography, Container, Box, Divider, Card, CardContent, Link} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


import moment from 'moment'

const groups = [{ id: 1, title: 'Connectionism' }, { id: 2, title: 'Symbolic AI'}, { id: 3, title: 'Behaviorism'}]
const countryGroups = [{ id: 4, title: 'China' }, { id: 5, title: 'Japan'}, { id: 6, title: 'UK'}, { id: 7, title: 'EU'}, { id: 8, title: 'US'}]

const techItems = [
  {
    id: 1,
    group: 2,
    canMove: false,
    canResize: false,
    title: 'McCulloch and Pitts',
    start_time: moment().year(1943),
    end_time: moment().year(1943).add(6, 'month'),
    description: `McCulloch and Pitts: mathematical modeling of brain computation`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    },
    {
      title: "Another related event",
      link: "https://www.google.com",
    },
    ]
  },
  {
    id: 2,
    group: 2,
    canMove: false,
    canResize: false,
    title: 'Turing: Computing Machinery and Intelligence',
    start_time: moment().year(1950),
    end_time: moment().year(1950).add(1, 'year'),
    description: `Turing's paper considers the question "Can machines think?" Turing says that since the words "think" and "machine" cannot be clearly defined we should "replace the question by another, which is closely related to it and is expressed in relatively unambiguous words."[1] To do this, he must first find a simple and unambiguous idea to replace the word "think", second he must explain exactly which "machines" he is considering, and finally, armed with these tools, he formulates a new question, related to the first, that he believes he can answer in the affirmative.`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 3,
    group: 2,
    canMove: false,
    canResize: false,
    title: 'Rosenblatt: Perception Algorithm',
    start_time: moment().year(1959),
    end_time: moment().year(1959).add(1, 'year'),
    description: `Turing's paper considers the question "Can machines think?" Turing says that since the words "think" and "machine" cannot be clearly defined we should "replace the question by another, which is closely related to it and is expressed in relatively unambiguous words."[1] To do this, he must first find a simple and unambiguous idea to replace the word "think", second he must explain exactly which "machines" he is considering, and finally, armed with these tools, he formulates a new question, related to the first, that he believes he can answer in the affirmative.`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 4,
    group: 2,
    canMove: false,
    canResize: false,
    title: 'DENDRAL Expert System',
    start_time: moment().year(1968),
    end_time: moment().year(1968).add(1, 'year'),
    description: `DENDRAL Expert System.`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 5,
    group: 1,
    canMove: false,
    canResize: false,
    title: 'Minsky: Perception (First Demise)',
    start_time: moment().year(1969),
    end_time: moment().year(1969).add(1, 'year'),
    description: `Minsky: Perception (First Demise).`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 6,
    group: 2,
    canMove: false,
    canResize: false,
    title: 'AI (SNAC method) Beats Backgammon Champion',
    start_time: moment().year(1969),
    end_time: moment().year(1969).add(1, 'year'),
    description: `AI (SNAC method) Beats Backgammon Champion.`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 7,
    group: 2,
    canMove: false,
    canResize: false,
    title: 'Back - propagation',
    start_time: moment().year(1986),
    end_time: moment().year(1986).add(1, 'year'),
    description: `Back - propagation.`
  }
];

let govItems = [
  {
    id: 8,
    group: 4,
    canMove: false,
    canResize: false,
    title: 'Foundation of Chinese Association for Artificial Intelligence',
    start_time: moment().year(1981),
    end_time: moment().year(1981).add(6, 'month'),
    description: `Foundation of Chinese Association for Artificial Intelligence`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    },
    {
      title: "Another related event",
      link: "https://www.google.com",
    },
    ]
  },
  {
    id: 9,
    group: 5,
    canMove: false,
    canResize: false,
    title: 'The Fifth Generation Computer Project',
    start_time: moment().year(1981),
    end_time: moment().year(1981).add(6, 'month'),
    description: `The Fifth Generation Computer Project`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    },
    {
      title: "Another related event",
      link: "https://www.google.com",
    },
    ]
  },

  {
    id: 10,
    group: 6,
    canMove: false,
    canResize: false,
    title: 'The Alvey Programme',
    start_time: moment().year(1984),
    end_time: moment().year(1990),
    description: `The Alvey Programme 1984-1990`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 11,
    group: 7,
    canMove: false,
    canResize: false,
    title: 'ESPRIT',
    start_time: moment().year(1984),
    end_time: moment().year(1998),
    description: `European Strategic Programme on Research in Information Technology ESPRIT 1984-1998`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 12,
    group: 8,
    canMove: false,
    canResize: false,
    title: 'The Strategic Computing Initiative',
    start_time: moment().year(1983),
    end_time: moment().year(1993),
    description: `The Strategic Computing Initiative`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 13,
    group: 8,
    canMove: false,
    canResize: false,
    title: 'DARPA Grand Challenge',
    start_time: moment().year(2005),
    end_time: moment().year(2006),
    description: `DARPA Grand Challenge`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 14,
    group: 4,
    canMove: false,
    canResize: false,
    title: 'National Medium- and Long-Term Plan for the Development of Science and Technology',
    start_time: moment().year(2006),
    end_time: moment().year(2020),
    description: `National Medium- and Long-Term Plan for the Development of Science and Technology`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 15,
    group: 4,
    canMove: false,
    canResize: false,
    title: '12th Five-Year Plan for Intelligent Smart Manufacturing',
    start_time: moment().year(2012),
    end_time: moment().year(2013),
    description: `12th Five-Year Plan for Intelligent Smart Manufacturing`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 16,
    group: 8,
    canMove: false,
    canResize: false,
    title: 'National Robotics Initiative',
    start_time: moment().year(2010),
    end_time: moment().year(2010),
    description: `National Robotics Initiative`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 17,
    group: 8,
    canMove: false,
    canResize: false,
    title: 'The National Artificial Intelligence Research and Development Plan',
    start_time: moment().year(2016),
    end_time: moment().year(2017),
    description: `The National Artificial Intelligence Research and Development Plan`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 18,
    group: 4,
    canMove: false,
    canResize: false,
    title: 'New Generation Artificial Intelligence Development Plan (AIDP)',
    start_time: moment().year(2017),
    end_time: moment().year(2018),
    description: `New Generation Artificial Intelligence Development Plan (AIDP`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 19,
    group: 7,
    canMove: false,
    canResize: false,
    title: 'Coordinated Plan on AI',
    start_time: moment().year(2018),
    end_time: moment().year(2019),
    description: `Coordinated Plan on AI`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 20,
    group: 8,
    canMove: false,
    canResize: false,
    title: 'National Intelligence Act',
    start_time: moment().year(2020),
    end_time: moment().year(2021),
    description: `National Intelligence Act of 2020`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 21,
    group: 5,
    canMove: false,
    canResize: false,
    title: 'National AI Strategy',
    start_time: moment().year(2019),
    end_time: moment().year(2020),
    description: `National AI Strategy`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
  {
    id: 22,
    group: 6,
    canMove: false,
    canResize: false,
    title: 'Proposal for EU AI Act',
    start_time: moment().year(2021),
    end_time: moment().year(2022),
    description: `Proposal for EU AI Act 2021`,
    related: [{
      title: "Learning Machines (1988)",
      link: "https://www.google.com",
    }]
  },
];

function Tree(props) {
  const {theme} = props;
  const [item, setItem] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(1);

  const cusItemRenderer = ({ i, timelineContext, itemContext, getItemProps, getResizeProps }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    return (
      <div
        {...getItemProps({
          style: {
            color: "white",
            backgroundColor : itemContext.selected ? 'rgba(2, 24, 130)' : 'rgb(82, 113, 255)',
            borderRadius: 4,
            borderWidth: 0,
          },
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
  
        <div
          style={{
            overflow: "hidden",
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>
  
        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };


  
  
  console.log("Item: ", item)
  console.log("Group: ", selectedGroup)
  // Tech timeline first, rows being the different areas of tech
  // Policy below, rows being countries 

  
  const newGroups = groups.concat(countryGroups).map(group => {
    const style = { 
      fontWeight: 500, 
    }
    
    return Object.assign({}, group, {
      title: item.group === group.id ?
      (
        <div style={{...style, fontWeight: 800, height: 100}}>{group.title}</div>
      ) : <div style={style}>{group.title}</div>,
      // height: item.group == group.id ? 200 : 100
    }) 
  })

  return (

    <ThemeProvider theme={theme}>
    <Container sx={{padding: 4}}> 
    <Container fixed sx={{width: "full", height: "full"}}>
    <Typography color="header.primary" variant="h3" sx={{fontWeight: 800, textAlign: 'center', marginBottom: 5}} >Ineractive Timeline</Typography>
    <Typography color="black" variant="subtitle1" sx={{textAlign: 'center', marginBottom: 5}} >Description of the timeline, intention with the project etc. </Typography>
    </Container>


    {item.title ?    
    <div>
    <Typography color={'#021882'} variant="h6" sx={{fontWeight: 800, textAlign: 'left'}} gutterBottom >{item.group ? groups.concat(countryGroups).find(group => group.id === item.group).title : ""}</Typography>
    <Box           
      sx={{
              mb: 2,
              display: 'flex',
            }}
        >
        <Divider orientation="vertical" sx={{ml: 0, mr: 2}} flexItem />

        <Card elevation={0} sx={{alignItems: 'left',justifyContent: "left", minWidth: 275, mb: 3}} >
        <CardContent sx={{ textAlign: 'left', alignItems: 'left', justifyContent: "left"}}>
          <Typography variant="subtitle2" gutterBottom >{item.start_time ? item.start_time.format('YYYY') : ""}</Typography>
          <Typography variant="h6" gutterBottom sx={{fontWeight: 800}}>{item.title}</Typography>
          <Typography variant="body2" gutterBottom sx={{pl: 4}}>{item.description}</Typography>
          {item.related ?
              <Box sx={{display: "flex"}}>
              <Typography variant="body2" gutterBottom sx={{fontWeight: 800}}>Related </Typography> 
              { item.related ? 
              item.related.map((i) => (
                <Link href={i.link}><Typography variant="body2" gutterBottom sx={{pl: 1}}>{i.title}</Typography></Link>
                )) : <></>
              }
              </Box>
          : <></>}
        </CardContent>
        </Card>
        </Box>
        </div> 
        : <></>}

            <Timeline
            groups={newGroups}
              // groups.concat(countryGroups)}
            items={techItems.concat(govItems)}
            defaultTimeStart={moment().subtract(10, 'year')}
            defaultTimeEnd={moment()}
            stackItems
            itemHeightRatio={.75}    
            lineHeight={50}
            onItemSelect={(e) => {
              const i = techItems.concat(govItems).find(item => item.id === e)              
              setItem(i);
              setSelectedGroup(i.group);
            }}
            itemRenderer={cusItemRenderer} 
            sidebarContent={<div>Above The Left</div>}
            >
              <TimelineHeaders className="sticky">
              <SidebarHeader>
                {({ getRootProps }) => {
                  return <div {...getRootProps(
                    {
                      style: {
                        backgroundColor : 'rgb(82, 113, 255)',
                        color: 'white',
                        paddingTop: 5,
                        fontWeight: 800,
                      },
                    }
                  )}>Areas</div>
                }}
              </SidebarHeader>
                <DateHeader>
                  {({ getRootProps }) => {
                    return <div {...getRootProps()}>Left</div>
                  }}
                </DateHeader>
              </TimelineHeaders>
            </Timeline>


    </Container>
    </ThemeProvider>
);
}

export default Tree;
