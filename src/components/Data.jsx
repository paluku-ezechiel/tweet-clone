import React from "react";
import Like from "../icons/Like";
import Share from "../icons/Share";
import Replay from "../icons/Replay";
import Reposte from "../icons/Reposte";
import {
  avatar,
  tweet_image,
  photo,
  image,
  twitter,
} from "./Icon-image";

export const tweet_data = [
  {
    avatar: image,
    tweet_content: {
      tweet_body: {
        tweet_title: {
          tweet_title_author: "CNN",
          image: tweet_image,
          tweet_title_details: "@CNN",
          dotter:'.',
          date: "7m",
        },
        tweet_text:
          'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        tweet_image: undefined,
      },
      tweet_actions: {
        tweet_action1: {
          image: <Like />,
          chiffre: "57",
        },
        tweet_action2: {
          image: <Replay/>,
          chiffre: "144",
        },
        tweet_action3: {
          image: <Reposte />,
          chiffre: "184",
        },
        tweet_action4: {
          image: <Share/>,
          chiffre: undefined,
        },
      },
    },
  },

  {
    avatar: avatar,
    tweet_content: {
      tweet_body: {
        tweet_title: {
          tweet_title_author: "The New York Times",
          image: tweet_image,
          tweet_title_details: "@nytimes",
          dotter:'.',
          date: "2h",
        },
        tweet_text:
          "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        tweet_image: photo,
      },
      tweet_actions: {
        tweet_action1: {
          image: <Like />,
          chiffre: "19",
        },
        tweet_action2: {
          image: <Replay />,
          chiffre: "48",
        },
        tweet_action3: {
          image: <Reposte />,
          chiffre: "482",
        },
        tweet_action4: {
          image: <Share />,
          chiffre: undefined,
        },
      },
    },
  },

  {
    avatar: twitter,
    tweet_content: {
      tweet_body: {
        tweet_title: {
          tweet_title_author: "Twitter",
          image: tweet_image,
          tweet_title_details: "@Twitter",
          dotter:'.',
          date: "Oct 29 ",
        },
        tweet_text: "BIG NEWS lol jk still Twitter",
        tweet_image: undefined,
      },
      tweet_actions: {
        tweet_action1: {
          image: <Like />,
          chiffre: "6.8K",
        },
        tweet_action2: {
          image: <Replay />,
          chiffre: "36.6K",
        },
        tweet_action3: {
          image: <Reposte />,
          chiffre: "267.1K",
        },
        tweet_action4: {
          image: <Share />,
          chiffre: undefined,
        },
      },
    },
  },

  {
    avatar: twitter,
    tweet_content: {
      tweet_body: {
        tweet_title: {
          tweet_title_author: "Twitter",
          image: tweet_image,
          tweet_title_details: "@Twitter",
          dotter: ".",
          date: "Oct 4 ",
        },
        tweet_text: "hello literally everyone",
        tweet_image: undefined,
      },
      tweet_actions: {
        tweet_action1: {
          image: <Like />,
          chiffre: "118.7K",
        },
        tweet_action2: {
          image: <Replay />,
          chiffre: "785.4K",
        },
        tweet_action3: {
          image: <Reposte />,
          chiffre: "3.3M",
        },
        tweet_action4: {
          image: <Share />,
          chiffre: undefined,
        },
      },
    },
  },

  {
    avatar: twitter,
    tweet_content: {
      tweet_body: {
        tweet_title: {
          tweet_title_author: "Twitter",
          image: tweet_image,
          tweet_title_details: "@Twitter",
          dotter: ".",
          date: "Oct 4 ",
        },
        tweet_text: "hello literally everyone",
        tweet_image: undefined,
      },
      tweet_actions: {
        tweet_action1: {
          image: undefined,
          chiffre: undefined,
        },
        tweet_action2: {
          image: undefined,
          chiffre: undefined,
        },
        tweet_action3: {
          image: undefined,
          chiffre: undefined,
        },
        tweet_action4: {
          image: undefined,
          chiffre: undefined,
        },
      },
    },
  },
];


