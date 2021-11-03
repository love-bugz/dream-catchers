import { Grid, Theme, Box, Fab } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Post from "./Post";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 60,
  },
}));

export enum Tags {
  teeth = "teeth",
  apocaliptic = "apocaliptic",
  outmatched = "outmatched",
  flying = "flying",
  fatal = "fatal",
  lucid = "lucid",
}

const PostsFeed = () => {
  const styles = useStyles();
  const [posts, _setPosts] = useState([
    {
      title: "Esse cliche est",
      body: `Celiac irony adaptogen, pug messenger bag typewriter kickstarter leggings cray letterpress et put a bird on it thundercats lyft ad. Swag PBR&B beard, YOLO semiotics truffaut culpa hoodie copper mug williamsburg esse cliche est. 8-bit vinyl tousled exercitation, kogi lyft keffiyeh ex chartreuse aesthetic hammock banh mi proident succulents biodiesel. Irony taxidermy street art sint single-origin coffee pork belly keffiyeh enim proident quis raclette minim. Plaid culpa farm-to-table consectetur meggings intelligentsia artisan humblebrag kinfolk enamel pin chia do heirloom disrupt adipisicing. Air plant wolf ea vegan locavore crucifix banh mi post-ironic minim raw denim swag aliqua snackwave aliquip. Sartorial retro eiusmod try-hard venmo. Enim fingerstache brunch bushwick cliche. Ut hot chicken jianbing minim. Seitan af post-ironic, velit distillery four loko dolor tbh plaid small batch meggings unicorn vape. Food truck dolor flexitarian shaman, squid twee narwhal pitchfork. Polaroid lorem yr occupy ex hoodie hell of microdosing brunch lyft gochujang kinfolk, irony jean shorts whatever. Actually cardigan tacos sartorial tempor cold-pressed snackwave proident godard selvage ethical. Air plant scenester shabby chic williamsburg unicorn chicharrones yr hoodie. Aliqua tumeric prism, yr godard lomo etsy pork belly portland helvetica cillum. Do single-origin coffee distillery eu. Enamel pin bespoke incididunt gastropub id austin biodiesel flannel, leggings vinyl tofu forage ramps. Gastropub quinoa kitsch man braid ethical next level mustache taxidermy. +1 reprehenderit cray aliqua tote bag chartreuse. Sartorial lo-fi gastropub, XOXO YOLO banh mi bitters locavore taiyaki.`,
      timestamp: Date.now(),
      tags: [Tags.lucid, Tags.flying],
    },
    {
      title: "Excepteur austin et kale chips",
      body: `Ennui offal meh, green juice slow-carb kogi 8-bit knausgaard craft beer squid art party gochujang. Brunch air plant organic disrupt meggings mixtape dolore unicorn velit reprehenderit pickled shaman. Distillery affogato ipsum hoodie, microdosing gentrify put a bird on it organic pork belly lyft disrupt celiac. Keytar af franzen, poutine eu fixie pour-over. Flannel yuccie hexagon pabst photo booth, chia ullamco heirloom pour-over messenger bag health goth locavore. Banh mi in gentrify do truffaut, put a bird on it la croix. Waistcoat cupidatat farm-to-table palo santo eiusmod keffiyeh pabst lumbersexual. Hoodie 8-bit squid tote bag XOXO letterpress. Raw denim before they sold out est ut messenger bag hammock. Meh kale chips YOLO next level live-edge gluten-free lyft. Excepteur austin et kale chips, shoreditch marfa ugh shabby chic lo-fi activated charcoal everyday carry copper mug. Ea helvetica master cleanse, pork belly est flexitarian meggings occaecat jean shorts pariatur hexagon poutine ad cold-pressed.`,
      timestamp: Date.now(),
      tags: [Tags.fatal, Tags.apocaliptic],
    },
    {
      title: "3 wolf moon occaecat +1 skateboard jianbing",
      body: `I'm baby tattooed iPhone gluten-free sed non snackwave. Brooklyn etsy quinoa blog, narwhal vaporware meh plaid you probably haven't heard of them bushwick normcore chambray cupidatat adipisicing. Street art organic cred, man braid keffiyeh jean shorts kickstarter before they sold out deep v lomo. Subway tile cupidatat id in occaecat tattooed asymmetrical ipsum tempor leggings godard actually. Normcore direct trade man bun, poutine whatever forage prism dreamcatcher shoreditch. Cred deep v lorem kale chips. Ad paleo edison bulb laborum. Yr hoodie kitsch sint nulla. Hashtag laboris fixie aliqua, sartorial paleo edison bulb voluptate vinyl reprehenderit banjo. Fam retro lo-fi, cray truffaut flannel nostrud franzen seitan roof party. Yr man bun cupidatat sunt DIY elit iceland edison bulb. Selfies la croix pour-over est brunch subway tile. Ennui trust fund voluptate butcher officia enamel pin helvetica adipisicing tempor. Pok pok listicle chicharrones biodiesel aliqua labore. Bicycle rights franzen voluptate street art. Seitan quinoa deserunt, elit mlkshk pickled qui trust fund yr street art chartreuse ut. In iceland retro DIY messenger bag knausgaard plaid waistcoat dolore. Ut cardigan viral commodo listicle pok pok YOLO, edison bulb green juice pop-up. Chambray subway tile sunt fugiat selvage pour-over. Yr pickled listicle try-hard taiyaki, hella selfies drinking vinegar selvage cillum glossier marfa wayfarers DIY meditation. Tumeric literally poke, subway tile aliquip selvage fixie flexitarian. Cliche messenger bag mumblecore excepteur. 3 wolf moon occaecat +1 skateboard jianbing single-origin coffee tilde anim. Dolor scenester exercitation, knausgaard cliche adaptogen copper mug listicle non next level austin. Irony chartreuse nostrud helvetica lorem sustainable tumblr vape. Hammock taiyaki celiac, synth squid distillery veniam. Affogato chartreuse mixtape lo-fi fam mollit gentrify. Readymade twee pinterest ea unicorn street art, ad kombucha. Pop-up proident selfies, cronut knausgaard sartorial truffaut. Celiac occaecat raw denim lorem labore squid scenester wolf mustache affogato do normcore gluten-free twee tumeric. Deep v stumptown semiotics ramps man braid crucifix try-hard austin ethical truffaut.`,
      timestamp: Date.now(),
      tags: [Tags.outmatched],
    },
    {
      title: "Next level stumptown",
      body: `I'm baby synth chicharrones magna health goth sartorial ex fanny pack keytar offal williamsburg butcher ad. Next level stumptown meggings mixtape. PBR&B bicycle rights quinoa eu meh you probably haven't heard of them copper mug cornhole plaid velit etsy. Dreamcatcher brunch live-edge ipsum.`,
      timestamp: Date.now(),
      tags: [Tags.outmatched, Tags.teeth, Tags.fatal],
    },
    {
      title: "Small batch ea banh mi",
      body: `I'm baby aute waistcoat mixtape pop-up four dollar toast. Pickled waistcoat live-edge YOLO bicycle rights narwhal banh mi plaid brunch eiusmod jean shorts chambray quis la croix salvia. Church-key organic cardigan, cloud bread irure nisi truffaut. Godard blue bottle live-edge mumblecore, tacos poke venmo next level est viral YOLO farm-to-table 8-bit cupidatat. Organic elit mlkshk raclette church-key authentic voluptate. Small batch ea banh mi, tempor mollit fixie est tattooed crucifix stumptown artisan quis aesthetic.`,
      timestamp: Date.now(),
      tags: [
        Tags.apocaliptic,
        Tags.fatal,
        Tags.flying,
        Tags.lucid,
        Tags.outmatched,
        Tags.teeth,
      ],
    },
    {
      title: "Crucifix schlitz live-edge stumptown jianbing",
      body: `Do celiac ut shoreditch subway tile PBR&B, affogato snackwave pok pok tattooed heirloom microdosing scenester messenger bag. Echo park gochujang air plant helvetica, farm-to-table laboris food truck cronut jean shorts. Crucifix schlitz live-edge stumptown jianbing. Cred ugh whatever scenester cliche pariatur do dolore. Excepteur slow-carb vexillologist, actually four loko cold-pressed art party. Ethical sint magna, aesthetic mustache eu waistcoat pug chambray VHS yuccie.`,
      timestamp: Date.now(),
      tags: [Tags.teeth],
    },
  ]);
  return (
    <Box className={styles.container}>
      <Grid container>
        {posts.map((post) => (
          <Post
            body={post.body}
            timestamp={post.timestamp}
            tags={post.tags}
            title={post.title}
          />
        ))}
      </Grid>
    </Box>
  );
};
export default PostsFeed;
