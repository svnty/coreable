import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from './User';

export class Review extends Model {
  public reviewID!: number;
  public subjectID!: number;
  public completedByID!: number;

  // Review
  public emotionalResponse!: number;
  public empathy!: number;
  public managesOwn!: number;
  public faith!: number;
  public cooperatively!: number;
  public positiveBelief!: number;
  public resilienceFeedback!: number;
  public calm!: number;
  public change!: number;
  public newIdeas!: number;
  public workDemands!: number;
  public proactive!: number;
  public influences!: number;
  public clearInstructions!: number;
  public preventsMisunderstandings!: number;
  public easilyExplainsComplexIdeas!: number;
  public openToShare!: number;
  public tone!: number;
  public crossTeam!: number;
  public distractions!: number;
  public eyeContact!: number;
  public signifiesInterest!: number;
  public verbalAttentiveFeedback!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const sync = (sequelize: Sequelize) => {
  Review.init({
    'reviewID': {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    'subjectID': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    'completedByID': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    'emotionalResponse': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    'empathy': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'managesOwn': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'faith': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'cooperatively': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'positiveBelief': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'resilienceFeedback': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'calm': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'change': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'newIdeas': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'workDemands': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'proactive': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'influences': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'clearInstructions': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'preventsMisunderstandings': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'easilyExplainsComplexIdeas': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'openToShare': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'tone': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'crossTeam': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'distractions': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'eyeContact': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'signifiesInterest': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    'verbalAttentiveFeedback': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    'tableName': 'REVIEW',
    'sequelize': sequelize
  });

  return Review;
}

export const assosciate = () => {
  Review.belongsTo(User, { foreignKey: { name: 'subjectID', allowNull: false, field: 'userID' } });
  Review.belongsTo(User, { foreignKey: { name: 'completedByID', allowNull: false, field: 'userID' } });
  // Review.hasMany(Team, { through: User, foreignKey: '' })

  return Review;
}