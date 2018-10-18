{
    let view ={
        el: '#hotPlayList',
        template: `
        <h5>
            <span>推荐歌单</span>
            <svg class="icon arrow" aria-hidden="true" id="controlSongList">
                <use xlink:href="#icon-rightarrow"></use>
            </svg>
        </h5>
        <ul>
        </ul>
        `,
        init() {
            this.$el = $(this.el)
        },
        render(playlists) {
            if (playlists) {
                this.$el.find('ul').empty()
                playlists.map((data) => {
                    let li = `
                    <li>
                        <img src=${data.coverImgUrl} width=113 height=113>
                        <div>
                            <span class="playListName">${data.name}</span>
                        </div>
                    </li> 
                    `
                    this.$el.find('ul').append(li)
                })
            } else {
                this.$el.html(this.template)
            }
        }
    }

    let model = {
        data: {
            playlists: []
        },
        getHotPlayList() {
            return axios.get('/top/playlist?limit=9&order=hot').then((response) => {
                this.data.playlists = response.data.playlists
            })
        }
    }

    let controller = {
        init(view, model) {
            this.view = view
            this.model = model 
            this.view.init()
            this.view.render()
            this.model.getHotPlayList().then(()=>{
                this.view.render(this.model.data.playlists)
            })
        },
    }

    controller.init(view, model) 
}