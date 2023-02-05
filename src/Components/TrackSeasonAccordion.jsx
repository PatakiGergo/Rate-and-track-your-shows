import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrackEpisodeAccordion from "./TrackEpisodeAccordion";

export default function TrackSeasonAccordion(props) {
  const episodes = props.episodes;
 
  const season = props.season;
  const episodeAccordion = [
    <TrackEpisodeAccordion season={props.season} key={"placeholder"} />,
  ];

  const seasonEpisodes = [];
  const wholeSeason = props.wholeSeason;

  episodes.forEach((episode) => {
    if (episode.season === season) {
      seasonEpisodes.push(
        <TrackEpisodeAccordion
          season={props.season}
          key={episode.id}
          episode={episode.name}
          summary={episode.summary}
          data={episode}
          wholeSeason={wholeSeason}
        />
      );
    }
  });

  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <input type="checkbox" onClick={(e) => e.stopPropagation()} />
          <Typography>
            {props.title} Season {props.season} accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {episodeAccordion && seasonEpisodes}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
