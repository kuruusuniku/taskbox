
import TaskList from '../components/TaskList.vue';

import * as TaskStories from './Task.stories';
import { userEvent } from '@storybook/test'

export default {
  component: TaskList,
  title: 'TaskList',
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  args: {
    ...TaskStories.ActionsData,
  }
}

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

export const ThreeArchivedTasks = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
      ...Default.args.tasks.slice(0, 3),
      { id: '4', title: 'Task 4 (archived)', state: 'TASK_ARCHIVED' },
      { id: '5', title: 'Task 5 (archived)', state: 'TASK_ARCHIVED' },
      { id: '6', title: 'Task 6 (archived)', state: 'TASK_ARCHIVED' },
    ],
  },
  play: async (args) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.click(
      document.querySelector('#archiveTask-1')
    );
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};