const { fetchSubreddit, fetchRandomSubredditName, pretty } = require('./index');

// Fetch 2 random subreddits via /r/random, then grab each subreddits's JSON feed.
fetchRandomSubredditName(2)
  .then((subreddits) => fetchSubreddit(subreddits.map(({name}) => name)))
  .then((subreddits) => pretty(subreddits))
  .then((output) => console.log(output))
  .catch((err) => console.error(err));

/** OUTPUT:

  [
    {
      "subreddit": "swift",
      "urls": [
        "https://www.reddit.com/r/swift/comments/52oeqb/whats_everyone_working_on_this_week_9132016/",
        "https://vapor.codes",
        "https://www.reddit.com/r/swift/comments/53243l/alarm_clock_ios10/",
        "https://swiftweekly.github.io/issue-38/",
        "https://robots.thoughtbot.com/introducing-perform-easy-dependency-injection-for-storyboard-segues",
        "https://www.hackingwithswift.com/read",
        "https://www.reddit.com/r/swift/comments/5337k0/question_modelling_logic_conditional_types/",
        "https://www.reddit.com/r/swift/comments/5337e5/macbook_or_pc_laptop_vmware/",
        "https://www.reddit.com/r/swift/comments/5332dl/firebase_360_release_notes/",
        "https://swiftnews.curated.co/issues/101#start",
        "https://www.reddit.com/r/swift/comments/531fqf/fastlane/",
        "https://www.reddit.com/r/swift/comments/531pqg/when_will_realm_be_available_for_swift_3/",
        "https://www.reddit.com/r/swift/comments/530u1k/sorting_an_array_of_objects/",
        "https://www.reddit.com/r/swift/comments/52yp67/iad_discontinued_what_to_do/",
        "https://www.reddit.com/r/swift/comments/52w3qy/swift_2_swift_3/",
        "https://www.reddit.com/r/swift/comments/52w2gq/removal_of_noreturn_in_swift_30_broke_my_use_case/",
        "https://www.reddit.com/r/swift/comments/52xt8w/opinions_on_swift_playgrounds_on_ipad/",
        "https://www.reddit.com/r/swift/comments/52z8x5/lookin_4_a_site_of_swift_projectstutorials/",
        "https://www.reddit.com/r/swift/comments/52wa88/good_resources_for_learning_swift_language/",
        "https://www.reddit.com/r/swift/comments/52xc72/swift_23_swift_3_gamekit_get_the_default/",
        "https://www.reddit.com/r/swift/comments/52v1g3/json_encoding_nested_dictionaries_problem/",
        "https://oleb.net/blog/2016/09/swift-3-ranges/",
        "https://www.reddit.com/r/swift/comments/52ubys/custom_objects/",
        "https://swift.org/blog/swift-3-0-released/",
        "https://www.reddit.com/r/swift/comments/52vejm/question_working_with_bluetooth_scanner/",
        "https://www.reddit.com/r/swift/comments/52u142/question_how_to_create_beautiful_alerts/"
      ]
    },
    {
      "subreddit": "NarutoFanfiction",
      "urls": [
        "https://www.reddit.com/r/NarutoFanfiction/comments/4e4b2h/story_ideas_thread/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/531kis/round_6_sacrifice_by_scanndalus/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/532xig/what_kind_of_author_do_you_want_to_be/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/531rnb/a_wild_parody_appears_read_tales_of_a_gutsy_ninja/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/5328f7/are_there_any_fics_where_naruto_solves_his/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/530ax5/leader_naruto_fic/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52z9cu/eyes_of_pain_chapter_3/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52xz3b/id_like_some_feedback_game_of_thrones_x_naruto/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52wzem/bijuu_unbound/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52yst7/sasuke_focus_stories/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52v5ju/whats_the_weirdest_crossover_fic_youve_ever_seen/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52uy7h/would_a_naruto_that_trains_when_he_is_young_and/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52qlas/cheering_for_the_villain/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52rv42/ive_had_a_really_weird_idea_for_a_fic_i_was/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52q0uz/wp_danzo_goes_full_trump_in_konoha/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52pscp/ive_updated_homegrown_garden_tails/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52oyhr/he_will_surpass_a_bunch_of_derivative_literary/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52nr3f/what_takes_you_out_of_fight_scenes_what_are_the/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52ne7m/im_looking_for_stories_where_the_sandaime_teaches/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52ol82/any_good_akatsukiakatsuchi_fics/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52n3x4/so_theres_a_difference_between_good_cliffhangers/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52mv1t/im_looking_for_fics_where_naruto_ends_up_getting/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52o497/what_do_you_love_the_most_about_writing_in_general/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52likv/followup_to_subreddit_wiki/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52mvoa/fic_request_any_stories_where_naruto_gets_turned/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52nyrv/naruto_character_reading_or_watches/",
        "https://www.reddit.com/r/NarutoFanfiction/comments/52jnrh/tme_too_much_exposition/"
      ]
    }
  ]

 */
