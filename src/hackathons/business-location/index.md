---
layout: layout.hbs
---

# Hackathon - Business Locations

You are approached by a business developer to get advice on where to build a
new store in Phoenix, AZ. There are currently six candidates. Use the Yelp
dataset and come up with your own scoring scheme to identify the best location
to recommend.

## Report

[Read the Report](report.html)

## Business Types
As a team, choose one of the following business types to work on:

- A new full-service daycare center
- A new full-service car wash
- A new 24-hours gym
- A new 24-hours diner
- A new swimming pool
- A new organic food store
- A new sushi buffet

## Scoring Method

For this hackathon, you will use a scoring method that is based on a series of
20 Yes/No questions that can be applied to each candidate location. The candidate
location that has the most number of Yes's is the most viable location.

Each Yes/No question generally should take on the form of

  _Does the location have X nearby?_

where X is a feature that you think would be useful for the business to be viable.

Two examples of such questions are:
1. Does the location have _at least one McDonald's within one mile_?
1. Does the location have _at least ten businesses with 100 or more reviews within one mile_?

## Coding

Implement scoring functions and visualize how these candidate locations are
scored. The skeleton code is provided for you in [report.html](report.html).

## Grading

Each person must implement at least two questions to receive credits for this
hackathon.

## Submissions

### Business Type

Our team chose to analyze candidate locations for (fill in the business type).

### Contributors

The team members who contributed to this hackathon are:

- (Name)
- (Name)
- (Name)
- (Name)
- (Name)
- (Name)

### 20 Questions

Our team came up with the following relevant questions:

1. Does the location have any other 24 diners within 2 km? contributed by (Zach Lamb)

  We want to make sure that there are no competing businesses nearby.

2. Does the location have any other 24 hour businesses 2 km ? contributed by (Kari Santos)

  We want to make sure that people will be out near our location this time of day.

3. Does the location have any clubs within 2 km? contributed by (Kari Santos)

  People get hungry after going here. It is called the "Drunchies" or "Drunk Munchies"

4. Does the location have any bars within 2 km? contributed by (Heather Witte)

  People get hungry after going here. It is called the "Drunchies" or "Drunk Munchies"

5. Does the location have any music venues nearby? contributed by (Zach Lamb)

  This business will attract these types of people after shows are over

5. Does the location have any night life nearby? contributed by (Heather Witte)

  This is different from clubs or bars because there might be businesses that we are not aware of that will attract people.
6. Does the location have any movie theaters nearby? contributed by (Kari Santos)

	Diners are essential after a movie date night or Girls Night Out perhaps
7. Does the location have any three star or less locations nearby? contributed by (Name)

	Diners are not upscale.
8. Does the location have any 1 price range within 2 km? contributed by (Name)

   Diners are cheap.
9. Does the location have any record stores within 2 km? contributed by (Name)

  People who shop at record stores, tend to eat at diners.

10. Does the location have any thrift stores nearby? contributed by (Name)

  Same as above. People who shop at thrift, eat at diners.
11.Does the location have any universities nearby? contributed by (Name)

  College students love diners.

12. Does the location have any hospitals within 2 km? contributed by (Name)

  Hospitals are 24 hours ,and people like the comfort food at diners.

13. Does the location have any hotels within 2 km? contributed by (Zach Lamb)

  People who travel like comfort food

14. Does the location have any upscale or trendy places within 2 km? contributed by (Name)

  We want to stay away from upscale or trendy areas.

15. Are there any religious/faith based groups nearby? contributed by (Name)

  People go out after church.

16. Does the location have any schools within 2 km? contributed by (Zach Lamb)

  People like to go out after school dances,graduation, or other school events
17. Does the location have any places that serve alchohol within 2 km? contributed by (Zach Lamb)

  A diner would be the place to go for after graduations,school plays, school events.
18. Does the location have any retirement places within 2 km? contributed by (Zach Lamb)

Senior citizens like to go and reminiscent. Also , they like to eat early in the morning.


  (A diner would be the place to go for after graduations,school plays, school events)
19. Does the location have any dive bars but no wine bars within 2 km? contributed by (Name)

Dive bars are less classy.

  (A diner would be the place to go for after graduations,school plays, school events)
20. Does the location have any places that require formal attire within 2 km? contributed by (Name)

No one goes to a diner with formal attire.

### Conclusion

Our team collectively has implemented (N) scoring functions. Based on
the scores, our team recommends location (1, 2, 3, 4, 5, or 6 from west to east),
because it receives (m) out of (N) possible scores.
