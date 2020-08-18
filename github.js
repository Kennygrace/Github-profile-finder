class Github {
    constructor() {
        this.client_id = '59bef58f9e2e11053e4b';
        this.client_secret = 'e72617d3d51f9fb19909880e322a96099ef8de87';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}
