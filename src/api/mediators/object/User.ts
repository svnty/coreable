import { 
  GraphQLObjectType,
} from "graphql";
import { UserResolver } from "../../resolvers/User";

export const UserObjectMediator: GraphQLObjectType = new GraphQLObjectType({
  name: 'UserObjectMediator',
  description: 'UserObjectMediator',
  fields: () => {
    return {
      'user': {
        type: UserResolver,
        resolve(data) {
          return data.user;
        }
      }
    }
  }
});
