import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelList from '../travelList'
import {
  MainContainer,
  Heading,
  LoaderContainer,
  UnorderedList,
} from './styledComponent'

class travelGuide extends Component {
  state = {travelList: [], isLoading: false}

  componentDidMount() {
    this.apiCall()
  }

  apiCall = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({travelList: updateData, isLoading: false})
    }
  }

  renderView = () => {
    const {travelList} = this.state
    return (
      <UnorderedList>
        {travelList.map(each => (
          <TravelList key={each.id} travelDetails={each} />
        ))}
      </UnorderedList>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <MainContainer>
        <Heading>Travel Guide</Heading>
        {isLoading ? (
          <LoaderContainer data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </LoaderContainer>
        ) : (
          this.renderView()
        )}
      </MainContainer>
    )
  }
}

export default travelGuide
