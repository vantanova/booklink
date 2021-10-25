import { v4 as uuidv4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";

function setId(user) {
  user.app_metadata = user.app_metadata || {};

  if (!user.app_metadata.uuid) {
    user.app_metadata.uuid = uuidv4();

    auth0.users.updateAppMetadata(user.user_id, user.app_metadata);
  }
}

export default setId;
