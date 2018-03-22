package model;

public class Organization {
	private int id;
	private String name;
	private String contactEmail;
	private boolean volunteersNeeded;
	private String description;
	private boolean policeCheckRequired;
	private String logoUrl;
	private String shortDescription;
	private String opportunities;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public boolean isVolunteersNeeded() {
		return volunteersNeeded;
	}
	public void setVolunteersNeeded(boolean volunteersNeeded) {
		this.volunteersNeeded = volunteersNeeded;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isPoliceCheckRequired() {
		return policeCheckRequired;
	}
	public void setPoliceCheckRequired(boolean policeCheckRequired) {
		this.policeCheckRequired = policeCheckRequired;
	}
	public String getLogoUrl() {
		return logoUrl;
	}
	public void setLogoUrl(String logoUrl) {
		this.logoUrl = logoUrl;
	}
	public String getShortDescription() {
		return shortDescription;
	}
	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}
	public String getOpportunities() {
		return opportunities;
	}
	public void setOpportunities(String opportunities) {
		this.opportunities = opportunities;
	}
}