import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrackEpisodeAccordion from "./TrackEpisodeAccordion";

export default function TrackSeasonAccordion(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            {props.title} Season {props.season} accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TrackEpisodeAccordion></TrackEpisodeAccordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
