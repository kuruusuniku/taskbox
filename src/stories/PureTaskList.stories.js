// プレゼンテーション バージョン
import PureTaskList from '../components/PureTaskList.vue';

import * as TaskStories from './Task.stories';

export default {
  component: PureTaskList,
  title: 'PureTaskList',
  tags: ['autodocs'],
  decorators: [
    /**
     * Decorator to add margin around the story.
     * @returns {Object} - A Vue component template with margin.
     */
    () => ({ template: '<div style="margin: 3em;"><story/></div>' })
  ],
  args: {
    ...TaskStories.ActionsData,
  }
};

/**
 * Default story for the PureTaskList component.
 */
export const Default = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.js.
    tasks: [
      { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
      { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
      { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
      { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
      { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
      { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ],
  },
};

/**
 * Story for the PureTaskList component with pinned tasks.
 */
export const WithPinnedTasks = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
};

/**
 * Story for the PureTaskList component in a loading state.
 */
export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

/**
 * Story for the PureTaskList component with no tasks.
 */
export const Empty = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};