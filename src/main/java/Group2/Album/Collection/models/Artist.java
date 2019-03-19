package Group2.Album.Collection.models;

import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Artist {
	
	@Id
	@GeneratedValue
	private Long id;
	private String artistName;
	private String artistImage;
	private String age;
	private String hometown;
	private int rating;
	
	@OneToMany(mappedBy = "artist")
	private Collection <Album> allAlbums;
	
	@ManyToMany
	private Collection<Tag> allTags;
	
	@OneToMany(mappedBy = "artist")
	private Collection<Comment> allComments;
	
	public Artist () {}

	public Artist(String artistName, String artistImage, String age, String hometown, int rating, Album ...allAlbums) {
		this.artistName = artistName;
		this.artistImage = artistImage;
		this.age = age;
		this.hometown = hometown;
		this.allAlbums = Arrays.asList(allAlbums);
	} 
	
	public Long getId() {
		return id;
	}

	public String getArtistName() {
		return artistName;
	}

	public String getArtistImage() {
		return artistImage;
	}

	public String getAge() {
		return age;
	}

	public String getHometown() {
		return hometown;
	}
	
	public int getRating() {
		return rating;
	}

	public Collection<Album> getAllAlbums() {
		return allAlbums;
	}
	
	public Collection<Tag> getAllTags() {
		return allTags;
	}

	public Collection<Comment> getAllComments() {
		return allComments;
	}

	@Override
	public String toString() {
		return "Artist [id=" + id + ", artistName=" + artistName + ", artistImage=" + artistImage + ", age=" + age
				+ ", hometown=" + hometown + ", allAlbums=" + allAlbums + "]";
	}

}