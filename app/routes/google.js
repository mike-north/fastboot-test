import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  async model(){
    const data = await fetch('https://api.github.com/users/defunkt');

    return data.json();
  }
});
