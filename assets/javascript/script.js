const githubUsername = 'la-wer';

async function fetchGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await response.json();
        const avatarUrl = data.avatar_url;

        const fotoElement = document.getElementById('foto-github');
        fotoElement.src = avatarUrl;
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
    }
}

fetchGitHubProfile();
