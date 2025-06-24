"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionSection() {
  return (
    <div id="info">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          alias sequi in eum laboriosam non corporis quasi. Temporibus inventore
          eveniet odio rem, neque consequuntur quisquam pariatur culpa incidunt
          ipsum, maxime, tempore enim soluta ut velit nisi cumque vero placeat.
          Non corrupti minus accusantium nemo voluptatibus cupiditate voluptate,
          est earum. Odio.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className="font-lora">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          alias sequi in eum laboriosam non corporis quasi. Temporibus inventore
          eveniet odio rem, neque consequuntur quisquam pariatur culpa incidunt
          ipsum, maxime, tempore enim soluta ut velit nisi cumque vero placeat.
          Non corrupti minus accusantium nemo voluptatibus cupiditate voluptate,
          est earum. Odio.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta
          dignissimos dolor sapiente nihil perferendis fugit distinctio. Alias,
          id voluptates, ipsum at, possimus mollitia rem qui provident hic minus
          deleniti laborum ipsa consectetur dicta sequi atque blanditiis
          repellendus aperiam voluptatem culpa molestiae earum? Sequi
          accusantium aperiam voluptate tempora laboriosam reprehenderit!
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
