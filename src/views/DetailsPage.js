import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;

      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));

// import React, { Component } from 'react';
// import DetailsTemplate from 'templates/DetailsTemplate';
// import PropTypes from 'prop-types';
// import { routes } from 'routes';
// import withContext from 'hoc/withContext';
// // import Heading from 'components/atoms/Heading/Heading';

// class DetailsPage extends Component {
//   state = {
//     pageType: 'notes',
//   };

//   componentDidMount() {
//     const { match } = this.props;
//     switch (match.path) {
//       case routes.twitter:
//         this.setState({ pageType: 'twitters' });
//         break;
//       case routes.note:
//         this.setState({ pageType: 'notes' });
//         break;
//       case routes.article:
//         this.setState({ pageType: 'articles' });
//         break;
//     }
//   }

//   render() {
//     const dummyArticle = {
//       id: 1,
//       title: 'Wake me up when Vue ends',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi.',
//       twitterName: 'hello_roman',
//       articleUrl: 'https://youtube.com/helloroman',
//       created: '1 day',
//     };
//     // const { match } = this.props;
//     const { pageType } = this.state;

//     return (
//       <DetailsTemplate
//         pageType={pageType}
//         id={dummyArticle.id}
//         title={dummyArticle.title}
//         content={dummyArticle.content}
//         twitterName={dummyArticle.twitterName}
//         articleUrl={dummyArticle.articleUrl}
//         created={dummyArticle.created}
//       />
//     );
//   }
// }
// DetailsPage.propTypes = {
//   match: PropTypes.shape({
//     path: PropTypes.string.isRequired,
//   }).isRequired,
// };
// export default withContext(DetailsPage);
