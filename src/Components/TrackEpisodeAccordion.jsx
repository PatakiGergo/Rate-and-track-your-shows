import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function TrackEpisodeAccordion(props) {
  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Episode  1 accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Epizód cime</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
