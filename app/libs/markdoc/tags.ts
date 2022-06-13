import { Alert } from "~/components";

export const alert = {
  render: Alert,
  description: "Display the enclosed content in a alert box",
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
      description: "The title displayed at the top of the alert",
    },
  },
};
