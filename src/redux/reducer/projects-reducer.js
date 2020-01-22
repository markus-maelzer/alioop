import mapKeys from 'lodash/mapKeys';
import { FETCH_PROJECTS, FETCH_PROJECTS_SINGLE } from '../types';
import { API_URL } from 'config';

const initState = { total: 0, entries: {}, helmetData: {} };

const noMoreThatn160Chars = text => text.slice(0, 157) + '...';

const formatHeadData = ({
  title: dTitle,
  slug,
  subTitle,
  description,
  mainImgThumb
}) => {
  const desc = noMoreThatn160Chars(description);
  const title = 'Nikolas Cetl | ' + dTitle + subTitle;

  return {
    title,
    slug,
    meta: [
      {
        name: 'description',
        content: desc
      },
      {
        name: 'og:title',
        content: title
      },
      {
        name: 'og:description',
        content: desc
      },
      {
        name: 'og:img',
        content: API_URL.DOMAIN + mainImgThumb.path
      }
    ]
  };
};

export const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      const helmetData = mapKeys(
        action.data.entries.map(entry => formatHeadData(entry)),
        'slug'
      );

      return {
        ...state,
        entries: { ...mapKeys(action.data.entries, 'slug') },
        total: action.data.total,
        helmetData
      };
    case FETCH_PROJECTS_SINGLE:
      const [entry] = action.data.entries;
      const slug = entry['slug'];

      return {
        ...state,
        entries: { ...state.entries, [slug]: entry },
        total: action.data.total
      };
    default:
      return state;
  }
};
